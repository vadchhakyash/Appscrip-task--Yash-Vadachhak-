"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Filter({ isOpen, onToggle, itemCount }) {
  const [openFilters, setOpenFilters] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleOptionChange = (filterName, option) => {
    setSelectedOptions((prev) => {
      const current = prev[filterName] || [];
      const newSelection = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [filterName]: newSelection };
    });
  };

  const handleUnselectAll = (filterName, e) => {
    e.stopPropagation();
    setSelectedOptions((prev) => ({
      ...prev,
      [filterName]: [],
    }));
  };

  const filters = [
    { name: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
    { name: "OCCASION", options: ["Daily Use", "Special Event"] },
    { name: "WORK", options: ["Professional", "Casual"] },
    { name: "FABRIC", options: ["Cotton Blend", "Pure Leather"] },
    { name: "SEGMENT", options: ["Designer", "Mass Market"] },
    { name: "SUITABLE FOR", options: ["Hot Climate", "Cold Climate"] },
    { name: "RAW MATERIALS", options: ["Eco-Friendly", "Standard"] },
    { name: "PATTERN", options: ["Minimalist", "Bold Art"] },
  ];

  const getDisplayText = (filterName) => {
    const selected = selectedOptions[filterName];
    if (!selected || selected.length === 0) {
      return "All";
    }
    return selected.join(", ");
  };

  return (
    <aside className={`sidebarContainer ${isOpen ? "open" : ""}`}>
      <div className="filterList">
        <label className="checkboxFilter">
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>

        {filters.map((filter) => (
          <div key={filter.name} className="filterGroup">
            <div className="filterHeaderRow">
              <button
                type="button"
                className="filterHeader"
                onClick={() => toggleFilter(filter.name)}
                aria-expanded={openFilters[filter.name] || false}
              >
                <h2 className="filterTitle">{filter.name}</h2>
                <ChevronDown
                  size={16}
                  className={openFilters[filter.name] ? "rotated" : ""}
                />
              </button>
            </div>
            <div className="filterSummary">
              <span className="filterSelectedText">
                {getDisplayText(filter.name)}
              </span>
              {openFilters[filter.name] && (
                <button
                  type="button"
                  className="unselectAllButton"
                  onClick={(e) => handleUnselectAll(filter.name, e)}
                >
                  Unselect all
                </button>
              )}
            </div>
            {openFilters[filter.name] && (
              <div className="filterOptions">
                {filter.options.map((option) => {
                  const isChecked =
                    selectedOptions[filter.name]?.includes(option) || false;
                  return (
                    <label key={option} className="filterOptionItem">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleOptionChange(filter.name, option)}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
