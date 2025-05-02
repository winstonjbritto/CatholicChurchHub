export default function ChurchPreview() {
  return (
    <section className="bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-10">
          Explore Individual Church Pages
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="relative h-64 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover" 
              alt="St. Mary's Cathedral" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center mb-2">
                <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded">HISTORIC</span>
                <span className="mx-2 text-white">•</span>
                <span className="text-white text-sm">Est. 1891</span>
              </div>
              <h1 className="text-white font-heading text-3xl md:text-4xl font-bold">St. Mary's Cathedral</h1>
              <p className="text-white opacity-90 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 inline mr-1">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                1111 Gough St, San Francisco, CA
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-2/3 px-3">
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold mb-3">About This Church</h3>
                  <p className="text-neutral-600">
                    St. Mary's Cathedral, also known as the Cathedral of Saint Mary of the Assumption, is the principal church of the Roman Catholic Archdiocese of San Francisco. The cathedral is located in the Cathedral Hill neighborhood of San Francisco.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary mr-2">
                        <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                      </svg>
                      <h4 className="font-bold">Confession</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      Wed-Fri: 11:00 AM - 12:00 PM<br/>Saturday: 3:30 PM - 5:00 PM
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary mr-2">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                      </svg>
                      <h4 className="font-bold">Contact</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      (415) 567-2020<br/>info@stmaryscathedral.org
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary mr-2">
                        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                      </svg>
                      <h4 className="font-bold">Languages</h4>
                    </div>
                    <p className="text-sm text-neutral-600">
                      English, Spanish, Latin<br/>(Special masses in Filipino)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 px-3">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-heading text-xl font-bold mb-3">Today's Masses</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-primary">
                      <div>
                        <p className="font-bold">7:00 AM</p>
                        <p className="text-sm text-neutral-600">English • Fr. Michael</p>
                      </div>
                      <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Regular</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-primary">
                      <div>
                        <p className="font-bold">12:00 PM</p>
                        <p className="text-sm text-neutral-600">English • Fr. James</p>
                      </div>
                      <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Regular</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-accent">
                      <div>
                        <p className="font-bold">5:30 PM</p>
                        <p className="text-sm text-neutral-600">Spanish • Fr. Carlos</p>
                      </div>
                      <span className="text-xs bg-accent bg-opacity-10 text-accent px-2 py-1 rounded">Special</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="text-primary hover:text-primary-dark text-sm font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                      </svg>
                      View full calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
