import React, {useEffect, useState} from "react";
import axios from "axios";

const url = "https://api.coingecko.com/api/v3/simple/price";
const ids = "bitcoin,tether,ethereum,shiba-inu,dogecoin,tron";
const vsCurrencies = "usd";
const include24hrChange = true;
const includeMarketCap = true;

const MarketHoom = () => {
  const [cryptoData, setCryptoData] = useState({});
  const cryptocurrencies = [
    {
      id: "bitcoin",
      name: "بیت کوین",
      symbol: "BTC",
      src: "https://cdn.bitpin.ir/media/market/currency/1628415570.svg",
    },
    {
      id: "dogecoin",
      name: "تتر",
      symbol: "USDT",
      src: "https://cdn.bitpin.ir/media/market/currency/1628416117.svg",
    },
    {
      id: "ethereum",
      name: "اتریوم",
      symbol: "ETH",
      src: "https://cdn.bitpin.ir/media/market/currency/1628416057.svg",
    },
    {
      id: "shiba-inu",
      name: "هزار شیبا",
      symbol: "SHIBA",
      src: "https://cdn.bitpin.ir/media/market/currency/1628418366.svg",
    },
    {
      id: "tether",
      name: "دوج کوین",
      symbol: "DOGE",
      src: "https://cdn.bitpin.ir/media/market/currency/1628417852.svg",
    },
    {
      id: "tron",
      name: "ترون",
      symbol: "TRX",
      src: "https://cdn.bitpin.ir/media/market/currency/1628416984.svg",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}?ids=${ids}&vs_currencies=${vsCurrencies}&include_24hr_change=${include24hrChange}&include_market_cap=${includeMarketCap}`
        );
        const data = response.data;

        setCryptoData(data);
      } catch (error) {
        console.log("Error fetching crypto data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const showCryptoCurrencies = (crypto) => {
    const cryptoCurrency = cryptoData && cryptoData[crypto.id];
    return (
      <tr className="w-full flex justify-between  items-center" key={crypto.id}>
        <td className="py-3  text-sm font-medium ">
          <div className="flex items-center justify-start ">
            <img className="w-8 h-8 lg:w-10 lg:h-10" src={crypto.src} alt={crypto.id} />
            <h3 className="flex items-center mr-2 font-bold text-black dark:text-gray-200 lg:text-[1rem]">
              {" "}
              {crypto.symbol}{" "}
              <span className="mr-2 text-gray-500  text-[.8rem] lg:text-[.82rem]">
                {crypto.name}
              </span>
            </h3>
          </div>
        </td>
        <td className=" w-1/2 flex justify-between ">
          <div className="py-3  text-[.85rem] font-medium flex text-slate-700 dark:text-slate-300 sm:min-w-[5rem] lg:text-[.9rem] ">
            {cryptoCurrency ? (
              `$${cryptoCurrency.usd.toLocaleString("en", {
                maximumFractionDigits: 5,
              })}`
            ) : (
              <p className=" text-sm px-2">$0</p>
            )}
          </div>
          <div
            dir="ltr"
            className={`py-3  text-[.85rem] font-medium lg:text-[.9rem] px-4 ${
              cryptoCurrency && cryptoCurrency.usd_24h_change >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}>
            {cryptoCurrency ? (
              `${cryptoCurrency.usd_24h_change.toLocaleString("en", {
                maximumFractionDigits: 2,
              })}%`
            ) : (
              <p className="text-green-600 text-sm px-2">0%</p>
            )}
          </div>
          <div dir="ltr" className="py-3  text-[.85rem] font-medium  hidden sm:flex text-slate-700 dark:text-slate-300 sm:min-w-[6rem] lg:text-[.9rem] px-2" >
            {cryptoCurrency ? `$${(
              (cryptoCurrency.usd_market_cap/1000000).toLocaleString("en", {
                maximumFractionDigits: 0,
              })
            )} M ` : (
              <p className=" text-sm px-7 lg:px-8">$0</p>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="mt-2 pt-8 px-3 mb-6 md:px-4  lg:px-20" id="market">
      <h2 className="text-[1.4rem] font-bold text-slate-700 dark:text-gray-300 mb-7 md:text-3xl md:mb-9 lg:text-[2rem]">
        محبوب ترین کریپتوکارنسی ها
      </h2>
      <div className="">
        <table className="min-w-full max-w-full flex flex-col items-start">
          <thead className=" w-full flex">
            <tr className="w-full flex justify-between items-center">
              <th className="py-3  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 lg:text-[.8rem]">
                نام
              </th>
              <th className=" w-1/2 flex justify-between items-center">
                <div className="py-3  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 sm:min-w-[5rem] lg:text-[.8rem] ">
                  {" "}
                  قیمت
                </div>
                <div className="py-3  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 lg:text-[.8rem]">
                  تغییر 24h{" "}
                </div>
                <div className="py-3  text-sm font-medium tracking-wider  text-gray-700  dark:text-gray-400 hidden sm:flex sm:min-w-[6rem] sm:text-center sm:pr-2 lg:text-[.8rem]">
                  حجم معاملات
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col">
            {cryptocurrencies.map((crypto) => showCryptoCurrencies(crypto))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(MarketHoom);
