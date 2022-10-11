import React from "react";

const DropDown = ({ dropButton }) => {
  return (
    <div class="dropdown">
      <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {dropButton}
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <button class="dropdown-item" type="button">
            Action
          </button>
        </li>
        <li>
          <button class="dropdown-item" type="button">
            Another action
          </button>
        </li>
        <li>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
