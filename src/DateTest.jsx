import React from "react";

function TarihTitle() {
  const title = "Tarih ";
  return <div>{title + Date.now()}</div>;
}

export default TarihTitle;
