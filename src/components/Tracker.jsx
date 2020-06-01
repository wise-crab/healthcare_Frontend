/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../assets/styles/sass/components/_tracker.scss';

class Tracker extends React.Component {
  constructor() {
    super();
    this.modalHandler = (e) => {
      this.setState({
        data: e.detail.data,
        visible: true,
      });
    };
    this.state = {
      data: {
        title: '',
        closeOnClick: false,
        content: '',
      },
      visible: false,
    };
    this.close = this.close.bind(this);
    this.modalClick = this.modalClick.bind(this);
  }

  render() {
    return !this.state.visible ? null : (
      <div className='modal' onClick={this.modalClick}>
        <div className='dialog'>
          <div className='dialog-title'>
            {this.state.data.title}
            <span className='dialog-close' onClick={this.close}>
              +
            </span>
          </div>
          <div className='dialog-content'>{this.state.data.content}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('modal', this.modalHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('modal', this.modalHandler);
  }

  close() {
    this.setState({
      visible: false,
      data: {
        title: '',
        closeOnClick: false,
        content: '',
      },
    });
  }

  static show(data) {
    document.dispatchEvent(
      new CustomEvent('modal', {
        detail: {
          data,
        },
      }),
    );
  }

  modalClick() {
    if (this.state.data.closeOnClick) this.close();
  }
}

export default Tracker;
