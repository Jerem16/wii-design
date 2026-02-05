"use client";

import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";

const NavLink = ({
    menuItem,
    isOpen,
    onNavigationClick,
    onMenuToggle,
    onSubmenuClose,
}) => {
    const submenuId = `submenu-${menuItem.id}`;
    const hasSubmenu = Boolean(menuItem.subItems?.length);
    const firstSubmenuLinkRef = useRef(null);

    const mainPath = `${menuItem.path}${menuItem.AnchorId ?? ""}`;

    const handleMainClick = useMemo(
        () => (event) => {
            event.preventDefault();
            onNavigationClick(mainPath);
            if (hasSubmenu) {
                onMenuToggle(menuItem.id);
            } else {
                onSubmenuClose();
            }
        },
        [hasSubmenu, mainPath, menuItem.id, onMenuToggle, onNavigationClick, onSubmenuClose]
    );

    const handleMainKeyDown = useMemo(
        () => (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleMainClick(event);
            }

            if (event.key === "ArrowDown" && hasSubmenu && isOpen) {
                event.preventDefault();
                firstSubmenuLinkRef.current?.focus();
            }

            if (event.key === "Escape") {
                event.preventDefault();
                onSubmenuClose();
            }
        },
        [handleMainClick, hasSubmenu, isOpen, onSubmenuClose]
    );

    return (
        <div className={`link-button ${isOpen ? "open" : ""}`}>
            <a
                className={`nav-link ${menuItem.class ?? ""}`}
                href={mainPath}
                onClick={handleMainClick}
                onKeyDown={handleMainKeyDown}
                aria-haspopup={hasSubmenu ? "menu" : undefined}
                aria-expanded={hasSubmenu ? isOpen : undefined}
                aria-controls={hasSubmenu ? submenuId : undefined}
            >
                {menuItem.title}
            </a>

            {hasSubmenu && isOpen && (
                <div className="submenu" id={submenuId} role="menu">
                    <div className="submenu_group">
                        {menuItem.subItems.map((subItem, index) => {
                            const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                            return (
                                <a
                                    key={subItem.id}
                                    ref={index === 0 ? firstSubmenuLinkRef : null}
                                    aria-label={`Section ${subItem.title}`}
                                    href={fullPath}
                                    className={`nav-link ${subItem.class}`}
                                    role="menuitem"
                                    tabIndex={0}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onNavigationClick(fullPath);
                                        onSubmenuClose();
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            onNavigationClick(fullPath);
                                            onSubmenuClose();
                                        }
                                        if (event.key === "Escape") {
                                            event.preventDefault();
                                            onSubmenuClose();
                                        }
                                    }}
                                >
                                    {subItem.title}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

NavLink.propTypes = {
    menuItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        AnchorId: PropTypes.string,
        class: PropTypes.string,
        subItems: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                AnchorId: PropTypes.string.isRequired,
                class: PropTypes.string,
            })
        ),
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onNavigationClick: PropTypes.func.isRequired,
    onMenuToggle: PropTypes.func.isRequired,
    onSubmenuClose: PropTypes.func.isRequired,
};

export default NavLink;
