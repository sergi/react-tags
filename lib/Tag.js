import React, { Component } from 'react';

const ItemTypes = { TAG: 'tag' };

class Tag extends Component {
  static propTypes = {
    labelField: React.PropTypes.string,
    onDelete: React.PropTypes.func.isRequired,
    tag: React.PropTypes.object.isRequired,
    moveTag: React.PropTypes.func,
    removeComponent: React.PropTypes.func,
    classNames: React.PropTypes.object,
    readOnly: React.PropTypes.bool,
  }

  static defaultProps = {
    labelField: 'text',
    readOnly: false
  }

  render = () => {
    const { props } = this;
    const label = props.tag[props.labelField];
    const { readOnly } = props;
    const CustomRemoveComponent = props.removeComponent;
    const RemoveComponent = React.createClass({
      render() {
        if (readOnly) {
          return <span />;
        }
        if (CustomRemoveComponent) {
          return <CustomRemoveComponent {...this.props} />;
        }
        return <a {...this.props}>{String.fromCharCode(215)}</a>;
      }
    });
    const tagComponent = (
      <span style={{ opacity: 1 }} className={props.classNames.tag}>
        {label}
        <RemoveComponent className={props.classNames.remove} onClick={props.onDelete} />
      </span>
    );
    return tagComponent;
  }
}

export default Tag;
