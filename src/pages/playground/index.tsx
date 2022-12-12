import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';
import { ThemeClassNames } from '@docusaurus/theme-common';
import MainStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css';
import DocPageStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css';
import SidebarStyles from '@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { ApiFeatures } from './_apiFeatures';

export default function Playground(): JSX.Element {

    const defaultCode = "//click on feature or type code directy into editor";
    const [srcDoc, setSrcDoc] = useState("");
    const [code, setCode] = useState(defaultCode);

    useEffect(() => {
        runCode(code);
    }, [code]);

    function onFeatureClick(code) {
        setCode(code);
    }

    function runCode(code) {
        
        const documentContents = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" type="text/css" >  
            <title>Reveal Sdk</title>
            </head>
            <body>  
        
            <div id="revealView" style="height: 800px; width: 100%;"></div>
        
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" ></script>
            <script src="https://cdn.quilljs.com/1.3.6/quill.min.js" ></script>    
            <script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js" ></script>    
            <script src="https://dl.revealbi.io/reveal/libs/1.3.0/infragistics.reveal.js"></script>
        
            <script type="text/javascript">      
                $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/"); 
        
                load().catch(err =>{
                document.getElementById("revealView").innerHTML = err;
                });
                
                async function load() {
                ${code}  
                }
            </script>
            </body>
            </html>
        `;
        
        setSrcDoc(documentContents);
    }

    function resetCode() {
        setCode(defaultCode);
    }

    return (
        <Layout title="Developer Playground" description="">
            <div className={DocPageStyles.docPage}>
                <aside className={clsx(ThemeClassNames.docs.docSidebarContainer, SidebarStyles.docSidebarContainer)}>
                    <div style={{ margin: "65px 0 0 0" }}>
                        <nav className={clsx('menu thin-scrollbar', styles.menu)}>
                            {/* I hacked this menu together. revisit later */}
                            <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
                                {ApiFeatures.map((item, idx) => {
                                    if (item.type) {
                                        return (
                                            <DocSidebarItemHtml key={idx} item={item} />
                                        );
                                    }
                                    else {
                                        return (
                                            <li key={idx} className={clsx(ThemeClassNames.docs.docSidebarItemLink, ThemeClassNames.docs.docSidebarItemLinkLevel(1), 'menu__list-item')}>
                                                <a className="menu__link" onClick={() => onFeatureClick(item.code)} href="#">{item.label}</a>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <main className={clsx(MainStyles.docMainContainer)}>
                    <div className="col" style={{ padding: "0" }}>
                        <div className={styles.executionBar} >
                            <button><Translate id="playground.runButton">Run</Translate></button>
                            <button onClick={() => resetCode()}><Translate id="playground.resetButton">Reset</Translate></button>
                        </div>
                        <div style={{ border: "0px solid black" }}>
                            {/* <CodeEditor height="350px" value={snippet} language={"javascript"} ref={editorRef} /> */}
                        </div>
                        <div className={styles.iFrameContainer}>
                            <iframe title="result" srcDoc={srcDoc} style={{ width: "100%", height: "825px" }} />
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}