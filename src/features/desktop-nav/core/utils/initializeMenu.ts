import { attachContentToMenu } from "../../data/attachContent";
import { menuItems } from "../../data/menuItems";
import { contentIndex } from "../../data/content/index";

export function initializeMenuWithContent() {
    return attachContentToMenu(menuItems, contentIndex);
}
