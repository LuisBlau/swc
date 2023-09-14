import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
// import MainLayout from './layouts/_MainLayout';
// import LoadingScreen from './components/loading/LoadingScreen';
import Spinner from './pages/Spinner';
import globalContext from './context/global/globalContext';
// import Routes from './components/routing/Routes';
import contentContext from './context/content/contentContext';
import Text from './components/typography/Text';
import modalContext from './context/modal/modalContext';
import config from './clientConfig';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';

import Lobby from './pages/Lobby';
import Game from './pages/Game';
import Play from './pages/Play';

const App = () => {
  const [currentPage, setCurrentPage] = useState("lobby");
  const [tableID, setTableID] = useState(null);
  const { isLoading, chipsAmount, setChipsAmount, setIsLoading } = useContext(
    globalContext,
  );
  // const { getLocalizedString } = useContext(contentContext);
  const { openModal, closeModal } = useContext(modalContext);
  const { isLoading: contentIsLoading } = useContext(contentContext);

  function showFreeChipsModal() {
    openModal(
      () => (
        <Text textAlign="center">
          You've just unlocked a special bonus! It's time to boost your poker stack and take your game to the next level. Don't miss out on these FREE chips – they won't be here forever!
        </Text>
      ),
      "Claim Your Free Chips!",
      "Claim Now",
      handleFreeChipsRequest,
    );
  }

  const handleFreeChipsRequest = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.token;

      const res = await Axios.get('/api/chips/free', {
        headers: {
          'x-auth-token': token,
        },
      });

      const { chipsAmount } = res.data;

      setChipsAmount(chipsAmount);
    } catch (error) {
      console.log(error);
    } finally {
      closeModal();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    chipsAmount !== null &&
      chipsAmount < 1000 &&
      !isLoading &&
      !contentIsLoading &&
      setTimeout(showFreeChipsModal, 2000);

    // eslint-disable-next-line
  }, [chipsAmount, isLoading, contentIsLoading]);

  return (
    <>
      {isLoading || contentIsLoading ? (
        <Spinner />
      ) : (
          currentPage === 'lobby'? <Lobby onNavigate={setCurrentPage} setTableID={setTableID} />: '' ||
          currentPage === 'game'? <Game onNavigate={setCurrentPage} /> : '' ||
          currentPage === 'play'? <Play onNavigate={setCurrentPage} tableID={tableID} />: ''
      )}
      {config.isProduction && <GoogleAnalytics />}
    </>
  );
};
export default App;