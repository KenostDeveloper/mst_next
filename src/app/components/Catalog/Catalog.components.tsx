'use client'
import { useEffect } from "react";
import CatalogEl from "./CatalogEl.components";

const Catalog = ({catalog}:any) => {

    return (
        <div className="dart-catalog-menu">
            {catalog.map((item: any) => (
                <CatalogEl key={item.label} item={item}/>
            ))}
        </div>
        
    );
}

export default Catalog;