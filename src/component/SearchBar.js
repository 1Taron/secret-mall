import React from "react";
import "../css/SearchBar.css";

export default function SearchBar() {
    return (
        <>
            <div className="Search_Bar">
                <input
                    className="Search_input"
                    type="text"
                    placeholder="Search for models"
                />
                <div className="dropdown">
                    <select id="options" className="dropdown-select">
                        <option value="option1">Order By</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                    </select>
                </div>
            </div>
        </>
    )
}