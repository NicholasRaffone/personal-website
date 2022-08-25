import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Nicholas Raffone">
    <div className="md:h-screen pt-12 md:pt-0 mx-auto flex flex-col md:flex-row items-center justify-evenly w-fit mx-auto gap-7 md:gap-20 relative">
      <img src={'https://yt3.ggpht.com/ytc/AMLnZu91BueDfRw_PPeht766E0RdKohGtiwzo89ozw_Jthk=s900-c-k-c0x00ffffff-no-rj'} className=' h-96 md:h-48 lg:h-96 w-screen md:w-48 lg:w-96 float-right object-cover sticky'/>
      <div className="px-3 md:p-0 md:max-w-[50vw] md:h-48 lg:h-96 flex-1">
        <p className="text-4xl">Title</p>
        <p className="text-xl">Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
