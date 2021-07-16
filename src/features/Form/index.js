import React, { useState, useReducer, useEffect } from "react";
import styles from "./index.module.scss";
import { Input, Shipping, Button, Card, Total } from "../../ui";

const mock = [
  {
    text: "The Chelsea Boot",
    price: "$235",
    img: "https://picsum.photos/200/300",
    name: "",
    color: "black",
    quantity: "1",
  },

  {
    text: "The Twill Snap Backpack",
    price: "$65",
    img: "https://picsum.photos/200/300",
    name: "Reverse Denim + Brow leather",
    color: "",
    quantity: "1",
  },
  {
    text: "The Twill Zip Tote",
    price: "$48",
    img: "https://picsum.photos/200/300",
    name: "Reverse Denim + Black leather",
    color: "",
    quantity: "1",
  },
];

const initialState = {
  name: "",
  tel: "",
  address: "",
  optional: "",
  city: "",
  country: "",
  zip: "",
};

const validation = {
  name: {
    required: true,
  },
  tel: {
    required: true,
  },
  address: {
    required: true,
  },
  city: {
    required: true,
  },
  country: {
    required: true,
  },
  zip: {
    required: true,
  },
};

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

function reducer(state, action) {
  return { ...state, [action.type]: action.payload };
}
function summ() {
  let total = 0;

  mock.map((item) => {
    return (total = total + item.price);
  });
}

async function getGeoFromApi(url) {
  let data = null;
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (e) {
    console.log(e);
  }
  return { data };
}

export function Form() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [coordinates, setCoordinates] = useState(null);
  const [errors, setErrors] = useState({});

  function success(pos) {
    var crd = pos.coords;
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    setCoordinates({
      lat: crd.latitude,
      lng: crd.longitude,
    });
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(success);
  }, []);
  useEffect(async () => {
    if (coordinates) {
      const { data } = await getGeoFromApi(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.lat}&lon=${coordinates.lng}&limit=2&appid=${apiKey}`
      );
    }
  }, [coordinates]);

  function handleChange(e) {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};
    const fields = Object.keys(data);
    fields.forEach((item) => {
      if (validation[item] && validation[item].required && !data[item]) {
        errors[item] = "это поле обязательное";
      }
    });
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    console.log("отправка формы");
    console.log(data);
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.column__first}>
          <Shipping />
          <Input
            label="Recipient"
            placeholder="Full Name"
            onChange={handleChange}
            name=" full name"
            data={data}
            errors={errors}
          />
          <Input
            placeholder="Daytime Phone"
            onChange={handleChange}
            data={data}
            name="tel"
            errors={errors}
          />
          <Input
            label="Address"
            placeholder="Street Address"
            onChange={handleChange}
            data={data}
            name="address"
            errors={errors}
          />
          <Input
            placeholder="Apt,Suite,Bldg(optional)"
            onChange={handleChange}
            data={data}
            name="optional"
            errors={errors}
          />
          <Input
            placeholder="City"
            onChange={handleChange}
            name="city"
            data={data}
            errors={errors}
          />
          <Input
            placeholder="Country"
            name="country"
            onChange={handleChange}
            data={data}
            errors={errors}
          />
          <Input
            placeholder="ZIP"
            name="zip"
            onChange={handleChange}
            data={data}
            errors={errors}
          />
          <Button label="Continue" type="submit" />
        </div>
        <div className={styles.column__second}>
          <Card data={mock} />
          <Total data={summ} />
        </div>
      </div>
    </form>
  );
}
