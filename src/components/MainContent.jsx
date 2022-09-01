import CountryPage from './CountryPage/CountryPage';
import '../styles/mainContent.sass'

const MainContent = ({ data = [] }) => {
  return (
    <main className="main-content">
      <CountryPage
        data={data}
        className="bar-chart"
      />
    </main>
  )

}

export default MainContent