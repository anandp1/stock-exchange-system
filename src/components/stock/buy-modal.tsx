import { Dispatch, SetStateAction, useState, Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

import { OrderType } from "../../providers/order/order.provider";
import { Dialog, Transition } from "@headlessui/react";
import { DropDown } from "../shared/drop-down";

interface BuyModalProps {
  setBuyClicked: Dispatch<SetStateAction<boolean>>;
}
const BuyModal = ({ setBuyClicked }: BuyModalProps): JSX.Element => {
  const [quantity, setQuantity] = useState(0);
  const [orderType, setOrderType] = useState<OrderType>(OrderType.BUY);
  const [limit, setLimit] = useState(0);

  const onSubmitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // const formData = new FormData(event.target as HTMLFormElement);
    // const { changes, releasedBy } = Object.fromEntries(formData) as {
    //   changes: string;
    //   releasedBy: string;
    // };
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-30 inset-0 overflow-y-auto"
        onClose={() => {
          setBuyClicked(false);
        }}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md"
                  onClick={() => setBuyClicked(false)}
                >
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <form className="divide-gray-200" onSubmit={onSubmitHandler}>
                <div className="flex justify-center">
                  <DropDown />
                </div>
                <div className="flex flex-col gap-3 items-start py-5">
                  <label
                    htmlFor="service-name"
                    className="col-span-3 block text-sm font-medium text-gray-700 mx-auto"
                  >
                    Quantity:
                  </label>
                  <input
                    type="number"
                    className="
        form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        w-1/3
        mx-auto
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleNumber0"
                    placeholder="0"
                  />
                  <label
                    htmlFor="service-name"
                    className="col-span-3 block text-sm font-medium text-gray-700 mx-auto"
                  >
                    Limit:
                  </label>
                  <input
                    type="number"
                    className="
        form-control
        block
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        w-1/3
        mx-auto
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleNumber0"
                    placeholder="0"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mx-auto inline-flex justify-center py-2 px-14 shadow-md text-sm font-medium rounded-full text-white  bg-gray-800"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { BuyModal };
