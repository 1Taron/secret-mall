import React, { useEffect, useState } from "react";
import "../css/Main_1Page.css";

import Moving_Logo from "./Moving_Logo";
import Main_Category from "./Main_Category";

export default function Main_1Page() {

    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCategories(true);
        }, 2500); // 로고 애니메이션이 1초라고 가정

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="Main_1Page">
            <Moving_Logo className="Moving_logo" />
            {showCategories && (
                <Main_Category />
            )}
        </div>
    );
}