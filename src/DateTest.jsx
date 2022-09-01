import React from "react";

function TarihTitle() {
  const metin = "Tarih ";
  return <div>{metin + Date.now()}</div>;
}

export default TarihTitle;
