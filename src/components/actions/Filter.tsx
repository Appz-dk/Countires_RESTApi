import { useRef, useState } from "react";
import { ChevronDown } from "../../assets/ChevronDown";
import "./Filter.css"
import { ChevronUp } from "../../assets/ChevronUp";

const filterOptions = ["Africa", "America", "Asia", "Europe", "Oceania"]
const defaultOption = "Filter by Region"

const Filter = () => {
  const [open, setOpen] = useState(false)
  const [filterOption, setFilterOption] = useState(defaultOption)
  const dropdownRef = useRef<HTMLButtonElement>(null)

  const handleOptionChange = (opt: string) => {
    if (opt === filterOption) {
      setFilterOption(defaultOption)
    } else {
      setFilterOption(opt)
    }
    setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, opt: string) => {
    if (e.code !== "Space") return
    handleOptionChange(opt)
    dropdownRef?.current?.focus()
  }

  const chevron = open ? <ChevronDown /> :<ChevronUp />
  return (
    <div className="filter-dropdown">
      <button ref={dropdownRef} aria-label="filter dropdown" onClick={() => setOpen(prev => !prev)}>{filterOption} {chevron}</button>
    {open && (
      <ul className="filter-options">
        {filterOptions.map(opt => (
          <li 
          className={filterOption === opt ? "active" : ""}
          aria-label="filter option" 
          onClick={() => handleOptionChange(opt)}
          onKeyDown={e => handleKeyDown(e, opt)}
          tabIndex={0} 
          >
            {opt}
          </li>
        ))}
      </ul>
    )}
    </div>
  );
};

export default Filter;
