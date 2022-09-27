/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

function MainPage({ outputParams, onChange }) {
  const [users, setUsers] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(1);

  //   const [totalCount, setTotalCount] = React.useState(0);
  // const URL = `https://randomuser.me/api/?nat=${outputParams.nationalities}&results=20`;
  // https://randomuser.me/api/?seed=1.1000&results=20   ----seed URL
  React.useEffect(() => {
    if (fetching) {
      getUsers();
      console.log('fetching');
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  React.useEffect(() => {
    fetch(
      `https://randomuser.me/api/?nat=${outputParams.nationalities}&results=20${
        outputParams.seed ? '&seed=1.' + outputParams.seed : ''
      }`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers([...data.results]);
      })
      .catch((error) => '');
  }, [outputParams]);

  const getUsers = async () => {
    let quantityResaults = 20;
    if (fetching > 1) {
      quantityResaults = 10;
    }
    await fetch(
      `https://randomuser.me/api/?nat=${outputParams.nationalities}&results=${quantityResaults}${
        outputParams.seed ? '&seed=1.' + outputParams.seed + '&page=' + currentPage : ''
      }`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, ...data.results]);
        setCurrentPage(currentPage + 1);
      })
      .catch((error) => '');
  };

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('skroll');
      //   разобраться с этим
      setFetching((pervState) => pervState + 1);
    }
  };
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Индефикатор</th>
            <th scope="col">Имя</th>
            <th scope="col">Адрес</th>
            <th scope="col">Телефон</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td> {user.login.uuid}</td>
                <td>{` ${user.name.first} ${user.name.last}`}</td>
                <td>{`${user.location.city} ${user.location.state}`}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default MainPage;
