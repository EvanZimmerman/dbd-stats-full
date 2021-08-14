import React from 'react';

function PerkIcon({ displayName, iconPath, width }) {
  return (
    <div className={`flex-none my-auto relative top-0 left-0 p-2 ${width}`}>
      <img src={`../img/UI/Icons/General/teachable.png`} className="absolute inset-0 " alt={iconPath} />
      <img src={`../img/${iconPath}`} className="relative" alt={displayName} />
    </div>
  );
}

export default PerkIcon;