updateStyle(docked, width, height) {
    if (docked) {
        styles.container = { ...styles.container, top: '0px' };
        styles.tabs = { ...styles.tabs, 'paddingLeft': 0, width: width - 255 };
        styles.Scrollbars = { ...styles.Scrollbars, height: height - 110 };

        styles.divList = { ...styles.divList, width: '50%' };

    } else {
        styles.container = { ...styles.container, top: '56px' };
        styles.tabs = { ...styles.tabs, 'paddingLeft': 0, width: '100%' };
        styles.Scrollbars = { ...styles.Scrollbars, height: height - 160 };
        styles.divList = { ...styles.divList, width: '100%' };
    }
}


componentWillMount() {
    this.props.setRole('SHOP');
    this.updateStyle(this.props.docked, this.props.width, this.props.height);


    this.setState({
        showTileData: this.props.tilesData,
        id: this.props.routeParams.id
    });


}