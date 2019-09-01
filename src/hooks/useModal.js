import { useState } from 'react';

export const useModal = (initialIsOpened = false) => {
  const [isOpened, setIsOpened] = useState(initialIsOpened);
  const toggle = () => setIsOpened(!isOpened);
  return [isOpened, setIsOpened, toggle];
};

export const useModalWithData = (
  initialIsOpened = false,
  initialData = null
) => {
  const [isModalOpened, setIsModalOpened] = useModal(initialIsOpened);
  const [data, setData] = useState(initialData);
  const customSetIsModalOpened = isModalOpened => {
    setIsModalOpened(isModalOpened);
    if (isModalOpened === false) {
      setData(null);
    }
  };
  return [ customSetIsModalOpened, isModalOpened, data, setData ];
};
