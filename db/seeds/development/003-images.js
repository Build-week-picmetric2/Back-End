exports.seed = knex =>
  knex('images')
    .del()
    .then(() =>
      knex('images').insert([
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/8bf0322348cc11e7e3cc98325fbfcaa1',
          key: '8bf0322348cc11e7e3cc98325fbfcaa1',
          name: 'forest-931706_1920.jpg',
          description: 'Exclusive 24/7 paradigm',
          user_id: 2,
          category_id: 5,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/b46c5e2c17813f956df74118d60cfff7',
          key: 'b46c5e2c17813f956df74118d60cfff7',
          name: 'light-bulb-1246043_1920.jpg',
          description: 'Re-engineered stable productivity',
          user_id: 2,
          category_id: 4,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/d5da0201983f948c6073b64cc167b2dd',
          key: 'd5da0201983f948c6073b64cc167b2dd',
          name: 'microphone-1209816_1920.jpg',
          description: 'Self-enabling systemic hub',
          user_id: 2,
          category_id: 3,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/1970dc71b8453a73ac53d7d2494f9c1d',
          key: '1970dc71b8453a73ac53d7d2494f9c1d',
          name: 'milky-way-1023340_1920.jpg',
          description: null,
          user_id: 1,
          category_id: 1,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/f86fbd3d27e97d71239fb1f02e28bc36',
          key: 'f86fbd3d27e97d71239fb1f02e28bc36',
          name: 'office-1209640_1920.jpg',
          description: 'Optional holistic utilisation',
          user_id: 1,
          category_id: 3,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/c8aa6403a3525dbc15a9cc7e38c1d09d',
          key: 'c8aa6403a3525dbc15a9cc7e38c1d09d',
          name: 'pier-569314_1920.jpg',
          description: null,
          user_id: 2,
          category_id: 1,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/58081684ddd3ba8f5741c8db637f4732',
          key: '58081684ddd3ba8f5741c8db637f4732',
          name: 'sky-690293_1920.jpg',
          description: null,
          user_id: 1,
          category_id: 4,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/a9f842279317b0b83acc8eaa92afb0a6',
          key: 'a9f842279317b0b83acc8eaa92afb0a6',
          name: 'sparkler-677774_1920.jpg',
          description: 'Profit-focused dedicated attitude',
          user_id: 1,
          category_id: 5,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/991d0e49d1cf2e11bcdc9b24f3c8d408',
          key: '991d0e49d1cf2e11bcdc9b24f3c8d408',
          name: 'summerfield-336672_1920.jpg',
          description: 'Profit-focused stable extranet',
          user_id: 2,
          category_id: 4,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/ef1201e4fffc7a6d4fa2440c64d607f2',
          key: 'ef1201e4fffc7a6d4fa2440c64d607f2',
          name: 'turtle-863336_1280.jpg',
          description: 'Focused incremental projection',
          user_id: 1,
          category_id: 5,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/04f3a61cfd63804fb77fef5e2e382ce1',
          key: '04f3a61cfd63804fb77fef5e2e382ce1',
          name: 'typewriter-801921_1920.jpg',
          description: 'Progressive asynchronous architecture',
          user_id: 2,
          category_id: 3,
        },
        {
          url:
            'https://michelangelostestbucket.s3.us-west-2.amazonaws.com/03938cd1516a1f176502712b09430fb2',
          key: '03938cd1516a1f176502712b09430fb2',
          name: 'workplace-1245776_1920.jpg',
          description: null,
          user_id: 2,
          category_id: 5,
        },
      ])
    )
