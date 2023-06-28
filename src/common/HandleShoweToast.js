import {useState} from "react";
import {useEffect} from "react";
import {toast} from "react-hot-toast";
import {useSelector} from "react-redux";
import React from "react";

const HandleShoweToast = () => {
  const [shouldExecuteCode, setShouldExecuteCode] = useState(false);
  const {checkedAddedToThecard, product, errorCart, checkedRemovedToThecard} =
    useSelector((state) => state.cart);
  const {
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  } = useSelector((state) => state.favorites);

  useEffect(() => {
    if (!shouldExecuteCode) {
      return;
    }

    if (product && checkedAddedToThecard === product.id) {
      toast.success(`به سبد خرید اضافه شد`);
    }
    if (!errorCart && checkedRemovedToThecard) {
      toast.success(`از سبد خرید حذف شد`);
    }
    if (errorCart && checkedAddedToThecard) {
      toast.error(`به سبد خرید اضافه نشد`);
    }
    if (errorCart && checkedRemovedToThecard) {
      toast.error(`از سبد خرید حذف نشد`);
    }
  }, [
    shouldExecuteCode,
    checkedAddedToThecard,
    product,
    errorCart,
    checkedRemovedToThecard,
  ]);
  useEffect(() => {
    if (!shouldExecuteCode) {
      return;
    }
    if (favorite && checkedAddedToTheFavorites === favorite.id) {
      toast.success(`به لیست علاقه مندی ها اضافه شد`);
    }
    if (!error && checkedRemovedToTheFavorites) {
      toast.success(`از لیست علاقه مندی ها حذف شد`);
    }
    if (error && checkedAddedToTheFavorites) {
      toast.error(`به لیست علاقه مندی ها اضافه نشد`);
    }
    if (error && checkedRemovedToTheFavorites) {
      toast.error(`از لیست علاقه مندی ها حذف نشد`);
    }
  }, [
    shouldExecuteCode,
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  ]);

  useEffect(() => {
    if (!shouldExecuteCode) {
      setShouldExecuteCode(true);
    }
  }, [shouldExecuteCode]);

  return <></>;
};

export default React.memo(HandleShoweToast);
