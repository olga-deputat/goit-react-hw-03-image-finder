import React, { Component } from 'react';
import { ModalS, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
    document.body.style.overflow = 'scroll';
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  handleEscapePress = e => {
    if (e.key === 'Escape') this.props.closeModal();
  };

  render() {
    const url = this.props.imageLink;

    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalS>
          <img src={url} alt="largeImage" />
        </ModalS>
      </Overlay>
    );
  }
}
