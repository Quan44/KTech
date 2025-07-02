import './App.css'
import GetStartedButton from './components/GetStartedButton';
import ContinueWithAppleButton from './components/ContinueWithAppleButton';
import ContinueWithGoogleButton from './components/ContinueWithGoogleButton';
import ContinueWithFacebookButton from './components/ContinueWithFacebookButton';
import Button from './components/Button';
import { FaFacebook, FaGoogle, FaApple, FaPhone, FaBell, FaEllipsisH, FaPlay } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilterCircleOutline, IoOptions, IoCameraReverseOutline } from "react-icons/io5";
import Input from './components/Input';
import MatchCard from './components/Exercise03/MatchCard';
import CreditCard from './components/Exercise03/CreditCard';
import DashboardCard from './components/Exercise03/DashboardCard';
import ClubCard from './components/Exercise03/ClubCard';
import ProfileCard01 from './components/Exercise04/ProfileCard01';
import ProfileCard02 from './components/Exercise04/ProfileCard02';
import OvalCard from './components/Exercise05';
import TransactionCard from './components/Exercise06/TransactionCard';
import NotificationCard from './components/Exercise06/NotificationCard';
import PlaceCard from './components/Exercise07/PlaceCard';

function App() {

  return (
    <div>
      <div className='container'>
        <div className='wrapper'>
          <GetStartedButton />
          <ContinueWithAppleButton />
          <ContinueWithGoogleButton />
          <ContinueWithFacebookButton />
          <Button leftIcon={<FaGoogle size={21} />} label='Get Started' />
          <Button leftIcon={<FaApple size={21} />} label='Get Apple' />
          <Button leftIcon={<FaFacebook size={21} />} label='Get Facebook' type='outline' />
        </div>

        <div className='wrapper'>
          <Input leftIcon={<CiSearch width={21} height={21} />} />
          <Input label='Search' leftIcon={<CiSearch />} />
          <Input defaultValue='Textfield' leftIcon={<CiSearch />} />
          <Input label='Search in the web' leftIcon={<CiSearch />} rightIcon={<IoFilterCircleOutline />} />
          <Input label='Search crypto' leftIcon={<CiSearch />} rightIcon={<IoOptions />} />
          <Input label='Phone number' rightIcon={<FaPhone />} type="colorPhone" />
          <Input label='Search in the web' leftIcon={<CiSearch />} rightIcon={<IoFilterCircleOutline />} type='colorIcon' />
        </div>

        <div className='wrapper'>
          <MatchCard
            time="7'"
            teamA="Spain"
            teamB="France"
            flagA="https://flagcdn.com/w40/es.png"
            flagB="https://flagcdn.com/w40/fr.png"
          />
          <ClubCard
            clubName="Manchester United"
            logo="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
          />
          <CreditCard
            name="Wade Warren"
            cardNumber="4293 3242"
            brand="VISA"
            avatar="https://i.pravatar.cc/100?img=3"
          />
          <DashboardCard
            title="Dashboard"
            subtitle="Business management service"
            progress={80}
          />
        </div>

        <div className='wrapper'>
          <ProfileCard01
            name="Yolanda"
            subtitle="Web Development"
            avatar="https://randomuser.me/api/portraits/women/45.jpg"
            icon={<FaPhone className="icon" color="#111" />}
          />

          <ProfileCard02
            name="María"
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            icon={<IoCameraReverseOutline className="icon" color="#111" />}
          />
        </div>

        <div className='wrapper'>
          <OvalCard
            bgColor="#00CFFF"
            title="Miriam Jimenez"
            avatars={['src/components/Exercise05/avatar1.png']}
          />

          <OvalCard
            bgColor="#8000FF"
            title="Teams"
            subtitle="Two currently"
            textColor="#fff"
            avatars={[
              'src/components/Exercise05/avatar1.png',
              'src/components/Exercise05/avatar2.png',
              'src/components/Exercise05/avatar3.png',
            ]}
          />

          <OvalCard
            bgColor="#FFE500"
            title="New Teams"
            avatars={[
              'src/components/Exercise05/avatar4.png',
              'src/components/Exercise05/avatar5.png',
            ]}
          />
        </div>

        <div className='wrapper'>
          <TransactionCard
            logo="src\components\Exercise06\TransactionCard\nike.png"
            title="Nike store"
            subtitle="6 months of promotions"
            time="11:00AM"
            amount="-27.50"
          />

          <NotificationCard
            message="All your notifications are well turned on"
            icon={<FaBell />}
            badgeCount={3}
          />
        </div>

        <div className='wrapper'>
          <PlaceCard
            image="src\components\Exercise07\PlaceCard\landescape.png"
            title="Landescape"
            subtitle="423Km"
            rightNode={<FaEllipsisH />}
            background="#fcfede"
          />

          <PlaceCard
            image="src\components\Exercise07\PlaceCard\mountain.png"
            title="Falset Mountains"
            subtitle="423Km, 3 Week"
            rightImageSrc="src\components\Exercise07\PlaceCard\cloudy-sun.png"
            background="#ffffff"
          />

          <PlaceCard
            image="src\components\Exercise07\PlaceCard\sun-behind-cloud.png"
            title="Great day to schedule"
            subtitle="Lorem ipsum dolor sitamet."
            rightNode={<FaPlay />}
            background="#ecf3f9"
          />
        </div>
      </div>
    </div>
  )
}

export default App
