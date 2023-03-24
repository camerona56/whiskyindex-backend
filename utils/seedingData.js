// Default Bottles
const bottles = [
  {
    title: 'Springbank 10 Year Old',
    ticker: 'SB10',
    distillery: 'Springbank',
    bottler: 'Official',
    age: 10,
    region: 'Campbeltown',
    bottleSize: '70cl',
    bottledStrength: 46,
    distilleryStatus: 'Opperational',
    caskType: 'Bourbon',
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/6181005-001.JPG?itok=nkjO-JjM',
    marketValue:  
  },
  {
    title: 'Yamazaki 18 Year Old',
    ticker: 'YAM18',
    distillery: 'Yamazaki',
    bottler: 'Official',
    age: 18,
    region: 'Japan',
    bottleSize: '70cl',
    bottledStrength: 43,
    distilleryStatus: 'Operational',
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/7009149-001_0_0.JPG?itok=Ea_OVaSL',
    marketValue: 
  },
  {
    title: 'Daftmill 2007 Winter 2019 Release (UK)',
    ticker: 'DAF7W19UK',
    distillery: 'Daftmill',
    bottler: 'Official',
    age: 12,
    region: 'Lowland',
    bottleSize: '70cl',
    bottledStrength: 46,
    distilleryStatus: 'Operational',
    caskType: 'Bourbon',
    bottleQuantity: 1785,
    vintageYear: 2007,
    bottledYear: 2019,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5112354-001.JPG?itok=JEX1rmZm',
    marketValue: 
  },
  {
    title: 'Macallan Diamond Jubilee',
    ticker: 'MACDJ',
    distillery: 'Macallan',
    bottler: 'Official',
    region: 'Speyside',
    bottleSize: '70cl',
    bottledStrength: 52,
    distilleryStatus: 'Operational',
    bottleQuantity: 2012,
    bottledYear: 2012,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5113798-001.JPG?itok=Fqu-HjZs',
    marketValue: 
  },
  {
    title: 'Longrow 21 Year Old 2020 Release',
    ticker: 'LONG212020',
    distillery: 'Springbank',
    bottler: 'Official',
    age: 21,
    region: 'Campbeltown',
    bottleSize: '70cl',
    bottledStrength: 46,
    distilleryStatus: 'Operational',
    bottleQuantity: 3600,
    vintageYear: 1999,
    bottledYear: 2020,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5063525-001.JPG?itok=JKgIezj6',
    marketValue: 
  },
  {
    title: 'Glenfiddich 21 Year Old Reserva Chinese New Year 2021',
    ticker: 'GLENFI21RCNY2021',
    distillery: 'Glenfiddich',
    bottler: 'Official',
    age: 21,
    region: 'Speyside',
    bottleSize: '70cl',
    bottledStrength: 40,
    distilleryStatus: 'Opperational',
    caskType: 'Rum Cask Finish',
    vintageYear: 2000,
    bottledYear: 2021,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/6140005-001.JPG?itok=o2maqQkQ',
    marketValue: 
  },
  {
    title: 'Ardbeg Smoketrails Manzanilla Edition',
    ticker: 'ARDBSTM',
    distillery: 'Ardbeg',
    bottler: 'Official',
    region: 'Islay',
    bottleSize: '1L',
    bottledStrength: 46,
    distilleryStatus: 'Operational',
    caskType: 'American Oak & Manzanilla',
    bottledYear: 2022,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5116563-001.JPG?itok=uloyuwhm',
    marketValue: 
  },
  {
    title: 'Macallan 18 Year Old Triple Cask 2018 Release',
    ticker: 'MAC18TC2018',
    distillery: 'Macallan',
    bottler: 'Official',
    age: 18,
    region: 'Speyside',
    bottleSize: '70cl',
    bottledStrength: 43,
    distilleryStatus: 'Operational',
    vintageYear: 2000,
    bottledYear: 2018,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5117008-001.JPG?itok=yva2knFi',
    marketValue: 
  },
  {
    title: 'Yamazaki 25 Year Old',
    ticker: 'YAM25',
    distillery: 'Yamazaki',
    bottler: 'Official',
    age: 25,
    region: 'Japan',
    bottleSize: '70cl',
    bottledStrength: 43,
    distilleryStatus: 'Operational',
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/7005548-001_0.JPG?itok=fQ6JInaT',
    marketValue: 
  },
  {
    title: 'Bowmore 18 Year Old Aston Martin Edition 3',
    ticker: 'BOW18AM3',
    distillery: 'Bowmore',
    bottler: 'Official',
    age: 18,
    region: 'Islay',
    bottleSize: '70cl',
    bottledStrength: 43,
    distilleryStatus: 'Operational',
    caskType: 'Oloroso & PX',
    vintageYear: 2003,
    bottledYear: 2021,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5117155-001.JPG?itok=Me4gtcpw',
    marketValue: 
  },
  {
    title: 'Brora 30 Year Old 2003 Release',
    ticker: 'BRO302003',
    distillery: 'Brora',
    bottler: 'Official',
    age: 30,
    region: 'Highland',
    bottleSize: '70cl',
    bottledStrength: 55.7,
    distilleryStatus: 'Operational',
    bottleQuantity: 3000,
    vintageYear: 1973,
    bottledYear: 2003,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/5117074-001.JPG?itok=gYoByWmE',
    marketValue: 
  },
  {
    title: 'Glenmorangie A Tale of Cake',
    ticker: 'GLENMTC',
    distillery: 'Glenmorangie',
    bottler: 'Official',
    region: 'Highland',
    bottleSize: '70cl',
    bottledStrength: 46,
    distilleryStatus: 'Operational',
    caskType: 'Tokaji Dessert Wine Finish',
    bottledYear: 2020,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/6177183-001.JPG?itok=JKz4n7G3',
    marketValue: 
  },
  {
    title: 'Bowmore 1966 Whiskyfreunde Essenheim',
    ticker: 'BOW1966WE',
    distillery: 'Bowmore',
    bottler: 'Duncan Taylor',
    age: 36,
    region: 'Islay',
    bottleSize: '70cl',
    bottledStrength: 42.3,
    distilleryStatus: 'Operational',
    bottleQuantity: 120,
    vintageYear: 1966,
    bottledYear: 2022,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/6166509-001.JPG?itok=5BseJRIb',
    marketValue: 
  },
  {
    title: 'Ardbeg Supernova SN2019 Committee Release',
    ticker: 'ARDBSN2019CR',
    distillery: 'Ardbeg',
    bottler: 'Official',
    region: 'Islay',
    bottleSize: '70cl',
    bottledStrength: 53.8,
    distilleryStatus: 'Operational',
    caskType: 'Bourbon',
    bottledYear: 2019,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/7000458-001.JPG?itok=QZL8JV9R',
    marketValue: 
  },
  {
    title: 'Macallan 1979 Gran Reserva 18 Year Old',
    ticker: 'MAC18GR1979',
    distillery: 'Macallan',
    bottler: 'Official',
    age: 18,
    region: 'Speyside',
    bottleSize: '70cl',
    bottledStrength: 40,
    distilleryStatus: 'Operational',
    caskType: 'Sherry',
    vintageYear: 1979,
    bottledYear: 1997,
    bottleImage: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/uc_product_full/public/6181626-001_0.JPG?itok=ko72cwf0',
    marketValue: 
  }
]


// questions
// - remove field if no information?
// - what does SM mean at the end of Yamazaki 18?
// - what should we put for marketValue atm?
// - is the bottleImage URL correct?
// - tickers?
// - should bottle size by a string - 70cl & 1L issue
// - bottle strength just a number as always the same
// - private eye cut as no price obs
// - do we need N/A for likes of age? would we should age: N/A, or just not show anything?
// - just sticking to cask type desribed on whisky auctioneer - otherwise we'll be doing this for a lifetime
// - be wary of reserve not met when collecting price obs
// - should i delete the distillery status field if opperational as thats the default and could save time
// - added bottled year
// - had to release 1966 bowmore samaroli as no price obs in last 3 months
// - should we set up an exact system for naming tickers (focus on title?)
// - note: call bourbon never ex-bourbon