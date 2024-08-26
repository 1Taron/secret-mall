import React, { useState } from 'react';
import '../../css/Main_Page/Main_3Page.css';

export default function Main3Section() {
    const [activeBox, setActiveBox] = useState(null);

    const BoxClick = box => {
        if (activeBox === box) {
            setActiveBox(null);
        } else {
            setActiveBox(box);
        }
    };

    return (
        <>
            <div className="Main3_Container">
                <div className="Main3_sectionContainer">
                    <div
                        className={`main3_charBox ${activeBox === 'character' ? 'active' : ''}`}
                        onClick={() => BoxClick('character')}
                    >
                        <div className="charBox_imgLayout">사진</div>
                        <div className={`charBox_textLayout ${activeBox === 'character' ? '' : 'active2'}`}>
                            character의 소개글 인데 무었을 입력하여야 할까요?
                        </div>
                    </div>
                    <div
                        className={`main3_clothBox ${activeBox === 'clothes' ? 'active' : ''}`}
                        onClick={() => BoxClick('clothes')}
                    >
                        <div className="clothBox_imgLayout">사진</div>
                        <div className={`clothBox_textLayout ${activeBox === 'clothes' ? '' : 'active2'}`}>텍스트</div>
                    </div>
                    <div
                        className={`main3_accBox ${activeBox === 'accessories' ? 'active' : ''}`}
                        onClick={() => BoxClick('accessories')}
                    >
                        <div className="accBox_imgLayout">사진</div>
                        <div className={`accBox_textLayout ${activeBox === 'accessories' ? '' : 'active2'}`}>
                            텍스트
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
