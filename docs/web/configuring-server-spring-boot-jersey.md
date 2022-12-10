# Configuring a Spring Boot with Jersey Server

## Install

The steps below describe how to install the Reveal SDK into an existing Spring Boot with Jersey project.

1 - Update the **pom.xml** file.

First, add the Reveal Maven repository.

```xml title="pom.xml"
<repositories>
    <repository>
        <id>reveal.public</id>
        <url>https://maven.revealbi.io/repository/public</url>
    </repository>	
</repositories>
```

Next, add the Reveal SDK as a dependency.

```xml title="pom.xml"
<dependency>
    <groupId>com.infragistics.reveal.sdk</groupId>
    <artifactId>reveal-sdk</artifactId>
    <version>1.3.0</version>
</dependency>
```

2 - Create a Jersey Config class and initialize the Reveal SDK by calling the `RevealEngineInitializer.initialize` method. In order for the Reveal SDK to function properly with Jersey, we need to register all of the Reveal SDK classes with Jersey. To register the Reveal SDK classes, loop through the classes returned by the `RevealEngineInitializer.getClassesToRegister` method, and register them with the Jersey Config.

```java title="RevealJerseyConfig.java"
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.infragistics.reveal.engine.init.InitializeParameterBuilder;
import com.infragistics.reveal.engine.init.RevealEngineInitializer;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("/")
public class RevealJerseyConfig extends ResourceConfig 
{
    public RevealJerseyConfig()
    {
        RevealEngineInitializer.initialize();
        
        //register all Reveal classes in JAX-RS context
        for (Class<?> clazz : RevealEngineInitializer.getClassesToRegister()) {
        	register(clazz);
        }
    }
}
```

## Export

In order to export dashboards to **Image**, **PDF** or **PowerPoint** (either programmatically or through user interaction) the Reveal SDK uses [Playwright](https://playwright.dev/dotnet/) internally.

By default, the first time an end-user tries to export a dashboard to an image, PDF or PowerPoint, Playwright will try to download the Chromium browser to the server in the default location for the current platform. For Windows, the default path is **%userprofile%/AppData/Local/ms-playwright**.

This download may take some time to complete and cause a delay for the first end-user that tries to export a dashboard. This is ok during development, but may not be desirable in a production environment. For these scenarios you can use the settings below to fine tune the Export behavior.

These settings are exposed through the `RevealEmbedSettings.Export` property.
- CreateChromiumInstancesOnDemand - set this to false to force Playwright initialization to happen on app startup
- ChromiumDownloadFolder - the path where the Chromium executables will be downloaded
- ChromiumExecutablePath - the path where the Chromium executables have been preinstalled on the server.
- MaxConcurrentExportingThreads - the number of max concurrent threads used for exporting
- ExportingTimeout - the timeout period, in milliseconds, for an export operation. Default value is 30000 ms. If an export operation does not finish within the specified timeout period, the export operation will fail.

To manually install Playwright and Chromium on the server, use the [Playwright CLI](https://playwright.dev/dotnet/docs/cli):

```bash
dotnet tool install --global Microsoft.Playwright.CLI
playwright install chromium
```
