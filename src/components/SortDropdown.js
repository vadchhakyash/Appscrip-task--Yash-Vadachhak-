import { ChevronDown, Check } from "lucide-react";

const SORT = [
  { value: "recommended", label: "RECOMMENDED" },
  { value: "newest", label: "NEWEST FIRST" },
  { value: "popular", label: "POPULAR" },
  { value: "price-high", label: "PRICE: HIGH TO LOW" },
  { value: "price-low", label: "PRICE: LOW TO HIGH" },
];

export default function SortDropdown({
  sortBy,
  onSortChange,
  isOpen,
  onToggle,
  dropdownRef,
}) {
  const selectedOption = SORT.find((opt) => opt.value === sortBy);

  return (
    <div className="sortContainer" ref={dropdownRef}>
      <button
        className="sortButton"
        onClick={onToggle}
        aria-label="Sort products"
      >
        {selectedOption?.label}
        <ChevronDown
          size={16}
          className={`chevronIcon ${isOpen ? "chevronRotated" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="dropdownPanel" role="menu">
          {SORT.map((option) => {
            const isSelected = sortBy === option.value;
            return (
              <button
                key={option.value}
                className="dropdownOption"
                onClick={() => onSortChange(option.value)}
              >
                <span className="checkIconContainer">
                  {isSelected && <Check size={16} className="checkIcon" />}
                </span>
                <span
                  className={
                    isSelected
                      ? "dropdownOptionTextSelected"
                      : "dropdownOptionText"
                  }
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
