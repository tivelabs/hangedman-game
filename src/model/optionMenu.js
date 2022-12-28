class OptionMenu {
    constructor(menu, number, description) {
        this.menu = menu;
        this.number = number;
        this.description = description;
    }

    getDescription = () => {
        return this.description;
    }
}

export default OptionMenu;