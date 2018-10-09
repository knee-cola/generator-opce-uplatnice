class SelectBase extends React.Component {
    render() {
        let className = "form-field " + this.props.className;
        return(
            <div>
                <select className={className} id={this.props.id} onChange={this.props.onChange} value={this.props.value}>
                    { this.props.children }
                </select>
                { this.props.buttons }
            </div>);
    }
}

export {SelectBase}