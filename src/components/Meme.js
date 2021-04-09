import { useState, useEffect } from 'react';
const Meme = () => {
  const [meme, setMeme] = useState({});
  const [memeData, setMemeData] = useState([]);
  // const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);

  console.log(meme);

  useEffect(() => {
    // fetch('https://api.imgflip.com/get_memes')
    //   .then(response => response.json())
    //   .then(response => {
    //     // console.log('after the res.json()', response);
    //     // const { memes } = response.data;
    //     // // console.log(memes);
    //     // setMemeData(memes);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    const fetchMemes = async () => {
      try {
        let response = await fetch('https://api.imgflip.com/get_memes');
        response = await response.json();
        console.log('after the await for json()', response);
        const { memes } = response.data;
        setMemeData(memes);
        console.log(memes);
        setMeme(memes[0]);
        // setMemeComponent();
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemes();
  }, []);

  useEffect(() => {
    if (meme.id) {
      let caps = [];

      for (let i = 0; i < meme.box_count; i++) {
        caps.push('');
      }

      setCaptions(caps);
      console.log(caps);
    }
  }, [meme]);

  const setMemeComponent = () => {
    const randNum = Math.floor(Math.random() * memeData.length);
    setMeme(memeData[randNum]);
  };

  return (
    <div className='row'>
      <div className='col-sm-12 col-md-4'>
        <form action=''>
          {captions.map((c, index) => {
            return (
              <div className='form-group' key={index}>
                <input
                  type='text'
                  placeholder={`Set Caption ${index + 1}`}
                  className='form-control'
                  // onChange={}
                />
              </div>
            );
          })}
        </form>
        <button
          className='btn btn-block btn-warning'
          onClick={setMemeComponent}>
          Skip
        </button>
      </div>
      <div className='col-sm-12 col-md-8'>
        <div className='meme text-center'>
          {memeData.length > 0 ? (
            <img src={meme.url} alt={meme.name} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meme;