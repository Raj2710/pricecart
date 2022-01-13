import './App.css';
import PriceCard from './components/PriceCard';
function App() {

let  data = [
    {
        product: "FREE",
        price:0,
        users:"Single User",
        userEnabler:true,
        storage:"5GB Storage",
        storageEnabler:true,
        publicProjects:"Unlimited Public Projects",
        publicProjectsEnabler:true,
        communityAccess:"Community Access",
        communityAccessEnabler:true,
        privateProjects:"Unlimited Private Projects",
        privateProjectsEnabler:false,
        phoneSupport:"Dedicated Phone Support",
        phoneSupportEnabler:false,
        subDomain:"Free Subdomain",
        subDomainEnabler:false,
        reports:"Monthly Status Reports",
        reportsEnabler:false
    },
    {
      product: "PLUS",
      price:9,
      users:"5 Users",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
  },
  {
    product: "PRO",
    price:49,
    users:"Unlimeted Users",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Unlimited Free Subdomains",
    subDomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
}

  ]

//Props
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
        {
          data.map((e)=>{
            return <PriceCard data={e}/>
          })
        }

    </div>
  </div>
</section>
  </>
}

export default App;
