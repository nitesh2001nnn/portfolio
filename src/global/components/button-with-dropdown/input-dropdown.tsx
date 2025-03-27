import { useEffect, useRef, useState } from "react";
import Input from "../inputs/inputs";
import "./dropdown.scss";
import OverlayElement from "../../overlay/overlay";
import { Positions } from "../../constants/helpers";
import React from "react";

type dropdownType = {
  label: string;
  value: string;
};

interface dropdownProps {
  placeHolder: string;
  label: string;
  dropdownData: dropdownType[];
  optionClick: (item: any) => void;
  onDropdownBlur?: () => void;
  error?: string;
  onRemoveItem?: () => void;
}

const Inputdropdown = ({
  placeHolder,
  label,
  dropdownData,
  optionClick,
  onDropdownBlur,
  error,
  onRemoveItem,
}: dropdownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const drodownRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<any>({
    value: "",
    label: "",
    isValid: false,
  });

  const handleDropdownOpen = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelectDropdownData = (item: any) => {
    setSelectedItem((prev: any) => {
      return {
        ...prev,
        value: item.value,
        label: item.label,
        isTouched: item.isTouched,
        isValid: true,
        error: item.error,
      };
    });
    optionClick(item);
  };

  const handleRemoveItem = (event: any) => {
    event.stopPropagation();
    setSelectedItem({ value: "", label: "", isValid: false });
    onRemoveItem?.();
  };

  useEffect(() => {
    console.log("selected item", selectedItem);
  }, [selectedItem]);

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-container" >
        <Input
          placeholder={placeHolder}
          label={label}
          ref={drodownRef}
          value={selectedItem?.label}
          onBlur={onDropdownBlur}
          errorText={error}
          isValid={selectedItem.isValid}
          onClick={handleDropdownOpen}
        ></Input>
        <img
          src="global/icons/dropdown-down.png"
          className={`chevron ${isDropdownOpen ? "active-chevron" : ""}`}
        ></img>
      </div>
      {isDropdownOpen && (
        <OverlayElement
          refElement={drodownRef}
          overlyClick={() => setDropdownOpen(!isDropdownOpen)}
          position={Positions.bottom}
        >
          <div
            className="dropdown-list"
            style={{ width: drodownRef.current?.clientWidth }}
          >
            {dropdownData?.map((item: any, index: any) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`dropdown-item ${
                      selectedItem.label === item.label ? "active" : ""
                    }`}
                    onClick={() => handleSelectDropdownData(item)}
                  >
                    {item.label}
                    {selectedItem.label === item.label && (
                      <img
                        src="global/icons/cross-icon-blue.png"
                        className="cross-icon"
                        onClick={handleRemoveItem}
                      />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </OverlayElement>
      )}
    </div>
  );
};

export default Inputdropdown;
