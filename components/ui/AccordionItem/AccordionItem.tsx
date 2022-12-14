import { FC, ReactNode, useState } from 'react';
import s from './AccordionItem.module.css';
// import { Transition } from '@headlessui/react';
import cn from 'classnames';
const AccordionItem: FC<{
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
}> = ({ title, isOpen: isOpenDefault, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const open = isOpenDefault ? !isOpen : isOpen;
  return (
    <div className={cn(s.accordionItem, className)}>
      <h3 className={s.accordionItemTitle} onClick={handleClick}>
        {title}
      </h3>
      {/* {
        <Transition
          show={open}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <div className={s.accordionItemContent}>{children}</div>
        </Transition>
      } */}
      {open && <div className={s.accordionItemContent}>{children}</div>}
    </div>
  );
};
export default AccordionItem;
