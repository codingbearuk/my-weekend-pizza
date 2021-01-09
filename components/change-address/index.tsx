import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setInactive } from 'redux/actions/change-address.action';
import { changeDetails } from 'redux/actions/login.action';
import gsap from 'gsap';
import language from 'language-sources';
import POST from 'api-comunication/post';

import View from './change-address.view';
import Action from 'redux/actions/@action.t';

const ChangeAddressModal: React.FunctionComponent<{}> = p => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isUpdated, setUpdated] = useState<boolean>(false);

  const device = useSelector((s: RootState) => s.device.resolution);
  const user = useSelector((s: RootState) => s.user);
  const dispatch = useDispatch();
  const ContainerRef = useRef();
  const ModalRef = useRef();

  const inputs: Array<{ name: string; value: string; title: string; icon: string }> = [
    {
      name: 'address',
      value: user.adress,
      title: language.changeAddressModal.inputs.address,
      icon: 'HouseFill',
    },
    {
      name: 'city',
      value: user.city,
      title: language.changeAddressModal.inputs.city,
      icon: 'SignpostFill',
    },
    {
      name: 'postcode',
      value: user.postcode,
      title: language.changeAddressModal.inputs.postcode,
      icon: 'SignpostSplitFill',
    },
    {
      name: 'phone',
      value: `${user.phone}`,
      title: language.changeAddressModal.inputs.phone,
      icon: 'PhoneFill',
    },
  ];

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
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.to(ModalRef.current, {
      height: '0px',
    })
      .to(ContainerRef.current, {
        opacity: 0,
      })
      .then(() => dispatch(setInactive()));
  }, []);

  const handleSetMyAddress = (name: string, value: string): Action => dispatch(changeDetails(name, value));

  const handleUpdateButton = async (): Promise<void> => {
    interface response extends Object {
      status?: string;
      user?: {
        id: string;
        email: string;
        adress: string;
        city: string;
        postcode: string;
        phone: string;
      };
    }
    setLoading(true);
    const auth: response = await POST('/authorisation', {
      sessionID: window.localStorage.getItem('sessionID'),
    });
    if (auth.status === 'ok') {
      const update: any = await POST('/update-user-details', {
        id: auth.user.id,
        address: user.adress,
        city: user.city,
        postcode: user.postcode,
        phone: user.phone,
      });
      if (update.status === 'ok') {
        setLoading(false);
        setUpdated(true);
      }
    }
  };

  useEffect(() => {
    enterAnimation();
  }, []);

  return View({
    state: { isLoading, isUpdated },
    handlers: { handleCloseModal, handleSetMyAddress, handleUpdateButton },
    refs: { container: ContainerRef, modal: ModalRef },
    inputs,
  });
};

export default ChangeAddressModal;
