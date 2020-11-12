import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/Start';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import Track from '../pages/Track';
import Send from '../pages/Send';
import Travels from '../pages/Travels';
import Schedule from '../pages/Schedule';
import Scheduletime from '../pages/Scheduletime';
import DriverAuthentication from '../pages/DriverAuthentication';
import DriverLogin from '../pages/DriverLogin';
import DriverInformation from '../pages/DriverInformation';
import DriverSafe from '../pages/DriverSafe';
import DriverMenu from '../pages/DriverMenu';
import DriverCriateAccount from '../pages/DriverCriateAccount';
import Confirmation from '../pages/Confirmation';
import LojiLogin from '../pages/LojiLogin';
import LojiDashboard from '../pages/LojiDashboard';
import DriverTrips from '../pages/DriverTrips';
import LojiInformation from '../pages/LojiInformation';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName='Start'
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Track" component={Track} />
    <Auth.Screen name="Send" component={Send} />
    <Auth.Screen name="Travels" component={Travels} />
    <Auth.Screen name="Schedule" component={Schedule} />
    <Auth.Screen name="Scheduletime" component={Scheduletime} />
    <Auth.Screen name="DriverLogin" component={DriverLogin} />
    <Auth.Screen name="Start" component={Start} />
    <Auth.Screen name="DriverAuthentication" component={DriverAuthentication} />
    <Auth.Screen name="DriverInformation" component={DriverInformation} />
    <Auth.Screen name="DriverSafe" component={DriverSafe} />
    <Auth.Screen name="DriverMenu" component={DriverMenu} />
    <Auth.Screen name="DriverCriateAccount" component={DriverCriateAccount}/>
    <Auth.Screen name="Confirmation" component={Confirmation}/>
    <Auth.Screen name="LojiLogin" component={LojiLogin}/>
    <Auth.Screen name="LojiDashboard" component={LojiDashboard}/>
    <Auth.Screen name="DriverTrips" component={DriverTrips}/>
    <Auth.Screen name="LojiInformation" component={LojiInformation}/>
  </Auth.Navigator>
);

export default AuthRoutes;