import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AutoSearchInput({ options, placeholder, name, setJobTitleId ,className}) {
  const query = new URLSearchParams(useLocation().search);
  const [autoComplete, setAutoComplete] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: query
      ? query.get(name) !== null && query.get(name) !== undefined
        ? query.get(name)
        : ""
      : "",
    id: "",
  });
  const handleOnChnage = (e) => {
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter((optionName) => {
      if (userInput == null)
        return optionName
      else if (optionName.name.toLowerCase().includes(userInput.toLowerCase())) {
        return optionName
      }
    }
    );


    setAutoComplete({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
      id: "",
    });
  };
  const handleOnClick = (e) => {
    setAutoComplete({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      id: e.currentTarget.dataset.id,
    });
    //setJobTitleId(e.currentTarget.dataset.id);
  };
  const handleKeyDown = (e) => {
    const { activeOption, filteredOptions } = autoComplete;

    if (e.keyCode === 13) {
      setAutoComplete({
        ...autoComplete,
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption].name,
        id: filteredOptions[activeOption].id,
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) return;
      setAutoComplete({ ...autoComplete, activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption || filteredOptions) {
        if (activeOption === filteredOptions.length - 1) return;
        setAutoComplete({ ...autoComplete, activeOption: activeOption + 1 });
      }
    }
  };
  let optionList;
  if (autoComplete.showOptions && autoComplete.userInput) {
    if (autoComplete.filteredOptions.length) {
      optionList = (
        <ul className="app__search_options-list">
          {autoComplete.filteredOptions.map((optionName, index) => {
            let className;
            if (index === autoComplete.activeOption) {
              className = "app__search_options-list_active";
            }
            return (
              <li
                className={className}
                key={optionName.id}
                onClick={handleOnClick}
              >
                {optionName.name}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = <></>;
    }
  }
  return (
    <>
      <input
        type="text"
        name={name}
        data-id={autoComplete.id}
        value={autoComplete.userInput}
        onChange={handleOnChnage}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className={className}
      />
      <div className="app__search_options">{optionList}</div>
    </>
  );
}
