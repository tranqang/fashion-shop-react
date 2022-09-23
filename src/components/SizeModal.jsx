import React from 'react';
import images from 'src/static/images/images';

function SizeModal({ setShowSizeModal }) {
  return (
    <>
      <div
        className='modal fade show'
        id='Guide'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='GuideLabel'
        style={{ display: 'block', paddingRight: '22px' }}
        aria-modal='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content text-center'>
            <div className='modal-header bg-e6e6e6 d-block position-relative p-2'>
              <h5 className='modal-title text-uppercase' id='GuideLabel'>
                Hướng dẫn chọn size
              </h5>
              <button
                type='button'
                className='close position-absolute'
                data-dismiss='modal'
                aria-label='Close'
                onClick={() => setShowSizeModal(false)}
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              <img alt='size-option' src={images.sizeOption} />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowSizeModal(false)}
        className='modal-backdrop fade show'
      ></div>
    </>
  );
}

export default SizeModal;
