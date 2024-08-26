import React, { useEffect, useRef, useState } from 'react';
import '../css/main.css';

import Main_1Page from '../component/Main_Page/Main_1Page';
import Main_2Page from '../component/Main_Page/Main_2Page';
import Main_3d from '../../src/component/Main_Page/Main_3d';
import Footer from '../component/Footer';

import ReactFullpage from '@fullpage/react-fullpage';
//https://github.com/alvarotrigo/react-fullpage

export default function Mainpage() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Main_3d />

            <ReactFullpage
                debug
                scrollOverflow={true}
                scrolloverflowmacstyle={false}
                render={() => (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Main_1Page />
                        </div>

                        <div className="section">
                            <Main_2Page />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
}
