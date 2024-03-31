'use client'
import { useEffect, useRef, useState } from "react";

const CatalogEl = ({item} : any) => {

    const [active, setActive] = useState(false);

    const contentRef = useRef<any>(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
          ? `${contentRef.current.scrollHeight}px`
          : "0px";
    }, [contentRef, active]);

    return (
        <li className={active? `dart-catalog-menu__category active` : `dart-catalog-menu__category`}>
            <div className="dart-catalog-menu__el link-no-link" onClick={() => setActive(!active)}>
                <img src={item.image} alt={item.label}/>
                {item.label}
            </div>
            <ul onClick={(e) => e.stopPropagation()} ref={contentRef} className="dart-catalog-menu__list">
                {item.children.map((el: any) => (
                    <a key={el.label} href={el.url} className="dart-catalog-menu__el"><li>{el.label}</li></a>
                ))}
            </ul>
        </li>
    );
}

export default CatalogEl;