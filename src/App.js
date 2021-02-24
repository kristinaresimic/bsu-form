import React, { useState } from 'react';
import { Navbar } from './components/Navbar.js';
import { Requirements } from './components/Requirements';
import '../src/styles/index.scss'
import Masternode from './components/Masternode.js';
import { Layout } from './components/Layout.js';
import { LastStep } from './components/LastStep.js';
import { User } from './components/User.js';

function App() {

  const [page, setPage] = useState('first')
  const [btnName, setBtnName] = useState('Next')
  const [requirementsDisplay, setRequirementsDisplay] = useState('flex')
  const [masterNodeDisplay, setMasterNodeDisplay] = useState('none')
  const [userDisplay, setUserDisplay] = useState('none')
  const [lastStepDisplay, setLastStepDisplay] = useState('none')
  const [counter, setCounter] = useState(1)
  const [pageName, setPageName] = useState('Requirements')
  const init = () => {
    setRequirementsDisplay('none');
    setMasterNodeDisplay('none');
    setUserDisplay('none');
    setLastStepDisplay('none');
    setCounter(1);
    setPage('first');
    setPageName('');
    setBtnName('Next');
  }

  const nextClick = () => {
    init();
    if (requirementsDisplay == "flex") {
      setMasterNodeDisplay('flex');
      setPageName('Masternode');

    }
    else {
      setUserDisplay('flex');
      setPageName('User');

    }

  }
  const backClick = () => {
    init();
    if (masterNodeDisplay == "flex") {
      setRequirementsDisplay('flex');
      setPageName('Requirements');

    }
    else if (userDisplay == "flex") {
      setMasterNodeDisplay('flex');
      setPageName('Masternode');

    }
    else {
      setUserDisplay('flex')
      setPageName('User');

    }
  }
  const finishClick = () => {
    init();
    setLastStepDisplay('flex');
    setPageName('Finish');

  }
  const oneClick = () => {
    init();
    setRequirementsDisplay('flex')
    setPageName('Requirements');

  }
  const twoClick = () => {
    init();
    setMasterNodeDisplay('flex')
    setPageName('Masternode');

  }
  const threeClick = () => {
    init();
    setUserDisplay('flex')
    setPageName('User');

  }
  const fourClick = () => {
    init();
    setLastStepDisplay('flex')
    setPageName('Finish');

  }



  return (
    <div className="App">
      <Navbar pageName={pageName} />
      <div style={{ display: requirementsDisplay }}>
        <Layout one={oneClick} two={twoClick} three={threeClick} four={fourClick} value="PAja" backNo nextClick={nextClick} page="first">
          <Requirements />
        </Layout>
      </div>
      <div style={{ display: masterNodeDisplay }}>
        <Layout one={oneClick} two={twoClick} three={threeClick} four={fourClick} nextClick={nextClick} backClick={backClick} page="second">
          <Masternode />
        </Layout>
      </div>
      <div style={{ display: userDisplay }}>
        <Layout one={oneClick} two={twoClick} three={threeClick} four={fourClick} nextNo finish backClick={backClick} finishClick={finishClick} page="third">
          <User />
        </Layout>
      </div>
      <div style={{ display: lastStepDisplay }}>
        <Layout one={oneClick} two={twoClick} three={threeClick} four={fourClick} nextNo backClick={backClick} page="fourth">
          <LastStep />
        </Layout>
      </div>
    </div>
  );
}

export default App;
