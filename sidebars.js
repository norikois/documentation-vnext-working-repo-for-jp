/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  webSidebar: [
    /* -------------------- General -------------------- */
    { type: "html", value: "<span class='sidebar__header'>General</span>", defaultStyle: false },
    { type: "doc", label: "Overview", id: "web/overview" },
    { type: "doc", label: "Installation", id: "web/installation" },
    { type: "category", label: "Getting Started", items: [
      { type: "category", label: "Creating the Server", items: [
        { type: "doc", label: "ASP.NET Web API", id:"web/getting-started-server" },
        { type: "doc", label: "Node.js", id:"web/getting-started-server-node" },
        { type: "doc", label: "Node.js - TypeScript", id:"web/getting-started-server-node-typescript" },
        { type: "doc", label: "Spring Boot - Jersey", id:"web/getting-started-spring-boot-jersey" },
      ]},
      { type: "doc", label: "Angular", id:"web/getting-started-angular" },
      { type: "doc", label: "ASP.NET Core Web App", id:"web/getting-started-aspnet" },
      { type: "doc", label: "HTML/JavaScript", id:"web/getting-started-javascript" },
      { type: "doc", label: "React", id:"web/getting-started-react" },
    ]},
    { type: "category", label: "Configuring the Server", items: [ 
      { type: "doc", label: "ASP.NET ", id:"web/configuring-server-aspnet" },
    ]},

    /* -------------------- Working with Dashboards -------------------- */
    { type: "html", value: "Working with Dashboards", className: "sidebar__header"},
    { type: "doc", label: "Creating", id: "web/creating-dashboards" },
    { type: "doc", label: "Loading", id: "web/loading-dashboards" },
    { type: "doc", label: "Filtering", id: "web/filtering-dashboards" },
    { type: "doc", label: "Editing", id: "web/editing-dashboards" },
    { type: "doc", label: "Saving", id: "web/saving-dashboards" },
    { type: "doc", label: "Linking", id: "web/linking-dashboards" },
    { type: "doc", label: "Exporting", id: "web/exporting-dashboards" },
    { type: "doc", label: "Theming", id: "web/theming-dashboards" },

    /* -------------------- Working with Data Sources -------------------- */
    { type: "html", value: "Working with Data Sources", className: "sidebar__header" },
    { type: "doc", label: "Data Sources", id: "web/datasources" },
    { type: "category", label: "Adding Data Sources", items: [ 
      { type: "doc", label: "Excel File", id:"web/adding-data-sources/excel-file" },
      { type: "doc", label: "In Memory Data", id:"web/adding-data-sources/in-memory-data" },
      { type: "doc", label: "MS SQL Server", id:"web/adding-data-sources/ms-sql-server" },
    ]},
    { type: "category", label: "Replacing Data Sources", items: [ 
      { type: "doc", label: "Excel File", id:"web/replacing-data-sources/excel-file" },
      { type: "doc", label: "MS SQL Server", id:"web/replacing-data-sources/ms-sql-server" },
    ]},
    { type: "doc", label: "Authentication", id: "web/authentication" },
    { type: "doc", label: "User Context", id: "web/user-context" },
    { type: "doc", label: "Obfuscate Connection Data", id: "web/obfuscate-connection-data" },

    /* -------------------- Working with Visualizations -------------------- */
    { type: "html", value: "Working with Visualizations", className: "sidebar__header" },
    { type: "doc", label: "Maximizing Visualizations", id: "web/maximizing-visualizations" },
    { type: "doc", label: "Responding to Click Events", id: "web/click-events" },
    { type: "doc", label: "Tooltips", id: "web/tooltips" },

    /* -------------------- Release Information -------------------- */
    { type: "html", value: "Release Information", className: "sidebar__header" },
    { type: "doc", label: "API Reference - Server", id: "web/api-reference-server" },
    { type: "doc", label: "API Reference - Client", id: "web/api-reference-client" },
    { type: "doc", label: "Known Issues", id: "web/known-issues" },
    { type: "doc", label: "Release Notes", id: "web/release-notes" },
    { type: "doc", label: "Third-Party Software", id: "web/third-party-software" },
    { type: "doc", label: "Data Limits", id: "web/data-size-limits" },
  ],
};

module.exports = sidebars;