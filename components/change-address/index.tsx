import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setInactive } from 'redux/actions/change-address.action';
import gsap from 'gsap';

import View from './change-address.view';

const ChangeAddressModal: React.FunctionComponent<{}> = p => {
  const device = useSelector((s: RootState) => s.device.resolution);
  const dispatch = useDispatch();
  const ContainerRef = useRef();
  const ModalRef = useRef();

  const enterAnimation = useCallback(() => {
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.fromTo(
      ContainerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
      }
    ).fromTo(
      ModalRef.current,
      {
        height: '0px',
      },
      {
        height: device === 'mobile' ? '95%' : '80%',
      }
    );
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch(setInactive());
  }, []);

  useEffect(() => {
    enterAnimation();
  }, []);

  return View({ handlers: { handleCloseModal }, refs: { container: ContainerRef, modal: ModalRef } });
};

export default ChangeAddressModal;
