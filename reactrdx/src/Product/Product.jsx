import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { incAction, decAction } from '../Redux/product/product.action'

const Product = () => {
  let dispatch = useDispatch();
  let product = useSelector((state)=>{
      return state.product;
  });
  // let product = {
  //   name: "Apple Note 12",
  //   image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAABFFBMVEUZAJskAM8UAHcXAI4RAGshAMQeALpHcEwbAKUdALEeAHMnAHMWAGwnANoJAF8aBIReAI5EAH5SAIcVAIIoAJgYAIItAKIsAIMrAIoyALBvAHQEAEwnAIRfAHYrAIVNAHYrAJhsAJMvAJ2BAGo6AHsgBpIWAHw1ALsIACkbAJQMAEopAI4UAHk1AHUKADEjAMMEABspAJMOAHG6AJqzAJUrAHerAJAhAKg4AMORAGF6AIiAAKkNAHSbAI+hAGCSAJq9AHWyAGoZDD3GAHKBAJQ+ANObAL8CAQgYALMIAEi9AN6eAKCxAKqlAL2OAJNpAJPIALrMAOoHASwNAHnJAMoZAI4dAL/AAMYOAT5xAJyAAJsAAAC5SrNzAAAAW3RSTlNaQuZi6UdLAFVP6d3hOuxDytXQbI7jgubGdcHq2srQ0anEnbLbMJVo29+jvHjX+DLms9WGk+Wf2lyfuMHGqo+XcIAaYKZOuu/I8qyHeqS0sneT0K5kz7eKvJeABldrPAAAEgtJREFUeJy13IlC2koUBuBgSJqwS1SwIJaquGG1WK3igvVSl7rgRt3e/z3uWWYmkxhbg/QEl6q3fPc/J8kEKsaH1+twbi6fz2cTeRu2PL1Zefkpfs2FTxPZfBZrNbv6ppo7PPzDXRqvfifveaZhOI7tOliu44obFvzRMUyv8XCzsPbmWsCfvXlomHOxOXOeZ1uiEi8qm0hYrrd0/DxYPXivJfQKZ67pWrYOAUBWq0TCbS7g37xw80D1dwP/4M0C/j8cN14JKJpz2LRtDMeFjpjQMgO7Bn2yFMdurj0/rzV/Jn5y3fyV83NL/Ogk/mwjOp9oTtNBjOEZNgUkEZZrWCIcD/7OpcTPrS24YQXiOT5eow3Aa+prW1vztMF/0oA/em/n5D3IJmGaALBhlgWH9h3HJY4Df+ODkGzNz89vNaIjOVbj9YA/Bj+IN/zph8h2RXI817YThpNw3WajCd2yVT6rqzZ4EpZ5g+kLC9XCX3o1Oe/X1tbC87H5Vs4hhmOZCQfn4/l4yfRs0TB8b8BY294x/O9KyiTW/O3Nwuu1NClqnlljz8/Nt3LmTAjHyxpNDBviXvJMC/ct2lYTBvQKvtXcUpTJicmJCXqLqskJ8f1JzQSTFzXM0RzXTpiWs/YM44geo+nSvm7BDK9mjaxlNCh9pnCNTYxRNcYaquAPsiRNgo6jhyeKk4d0bMc1QVNZWABOw3OsRNYysU/ZrGNZztLzs4ZhhXCMTTTh6x5sk80J+bWwaX7t+ebNHMO24UTQBM7Cww3sr0umAd2yYL/HGYLDj8EcYZGUsYl5OLZYP7WyEj9dw2v6UUnRQiyOBfeJ6SwcV+DQsYTpJLI2tQw4NnIm/Vzwzpp0lJOHIb/o6GdtmU0/prgcBzkJmB068x0/m3DKUGcL5OBhR+RCNUkU3vG35vVdGvdqRAHJ0EMCzuobOVni0J5FmiU88rzkSMzklqLwfo+bvhfNswlI5pgAAefhrRxu1mrCbNIxdcngcCzLho9qdkQw82wRDrXfq02ZWOSKpsUbZcu1s6u2aTSXGqbncavm5uYsB/csxbkd42DUAUgee8a0jY88aELSz592cxCOu7qasBw4Q+B5FAc5C5w5B06hrkOj3LhtEGZeP/7Io8/YZ3nDQRmTuzdlRKDY6QAHF1kwKbTuAQ0sViE0uWdBmyiYwOEHBZ9DxSglQpDbHCwdx4AFj2PTOeLw8FBPB5LhYGQoLyEaCb4rj8ooSsTZ0U0xO4659LDUNJu07MnmIRw34XMkBi0a5dPnT3rBn7WQRERbP+Ny3NUsngpwVWk0HV6GuTRDwDHhO1t8WKYGSYmqr2JTKCUi0PxWLI5rOe6qtUQn9OPjB9NjCC8M8TKCThJBjA8Jl09SCc3H5iTcY+LASd1rOrzCoBUPTLc4SfyBsgzbC5EYo7GYJwlYYMDBxQNNZaECnCU8ecrl1ypcZSFnQgQjZ8V3BEu6gqCYHOgIcdaSiiNXqIrjByMp4Sr7KCliUFyObbjGszyFNjzDkhiYcJs4YxIjW+QbYNMrShSTk/As5wZWGGu4HqSTluLAIhr3rGAyPoUt/jsWlZWIPbE5cGEDswwbhKNfSySMBI2yjyEHVb+/W9Y3vAVDkqBKzGZZXsLDy5fnhSbs59qVjQFnDskhy9fPj0/nd6LOnx4/Lddq/dpuuYZV3q2Vay9Bn+OcJIjjmAk8gXoGZqNatQpXgczhZEhyrhWhnj6Xq4jZranSROiJyYFrYseD4zBcnPPY8KMzWdOFCwoXZ+cTWq4AcHZ29nT2dI6bRjrvVasQUi0a9OlLbI5t4yM8/OAOxAXLeVhv0DqM03m8ujoL1RPYfNJjrdqq1qphUQE8A3DwEQx8AEM9hOHymQtP9MC5uj8765x1HmGjgj+IWmfSFTStVqXyTUUR0OkgnOhHm5hzT4hHehOiTudb5+wbetbX1xn0CAGRp8oimutCeTlGOmaQYyV8EZ5FE3wYhDvvPnZVPXY7XUH6BiQUna9fAejruAyo6rcMOe5AnMSLeASnG1WbnU0WrWNA6+cAehqvpquBppWLcTge7egBkPWSA/fd6/Zkddvdy253D26dMOjurlZCyyy9iYCA48RIx9YwuiXrc3q9nV67BzfY+F37EkCw7W1uggcKPdixZWhYSc3QKHEW3soJpxPOhzkI6dW5enUmAYhFnT0GUUIQUG8cNKVZMM1yw2JwKJ1X80lYgsOQQq/wsQ43qDbVZftyD2tzc1OBru4eSyIfahpy4jUrND1aQBYsPoAD91/AmqLbRxJJz6XwbGqeVKlaKpUEKE46HnPCHi0dPEnU2VIUIHxXn6rXP4qMQgFBv9CDG450TI7w2FEBCQ5gioVicao4XSxOF4pTU1Po+Uiey0vds86eQgnTgXwWARSvWcwJHQwpIEtxilzTYgMZeqBpHz+2Z7SOqXxqqJnljsVKxxGcQD7yjCE4SBnlmh4FzzQEBZsMqH05E/TA/JREPqWYHJlO2JOg9zads6RFFHimp4EDEU1BPtyykOcsVZKiWDu643tC8VCzDENyZkdnZ+FNhDSNEXGJhAIeMT7x09E5YRAuO5AzihK/RlcEaLr3+HTwH9bBjw4FpHlKot7DCXXMFpzZcGFavSd0/HdwAG9E+hbwPKYGaJaHz+nZ9msBMQfuvwRvG7SlGbT89N/B09MBblQU0jffc3VXFfHE5gQ99ot08O5LG2Cht9mN9MbKE9bZj6f9H1QKtMkejKeTUs166wLDiOL4IMUpYSwb4OAqg2W/A9v+2f6+L0LPD+m5uptV6eTfyMlLTnRAkkPBqEr1nh5hcdjZ7mzvI4lBMqCDPdkunh7kvHmt7Inng18EZAc4Qc2jWKlud7e3t/f3NRB5xPjInWsgjhsOyGYOHpXTAc3yIyzH2t32zAxqJOiFB+LpvYMTlRBwPOBIyEYKavSRlqi4ApuRIg1E8yPi4UPzoBx88uYFx5QcxOANF81tODPAyRM9kfl843h4X39POu4rnJTIJgkYWBXCIgyKPDN+x/x89G7F4+jxuHaoZTqHKt3t1XEFNoWnTgBJz/52IB9ql+jWwBxqlz7TruRIDYSDazE8mRemKCAfJPJhD03P1dX4uzjhnQz/6QFzUqkMYJJp0OAybGp6igIiz/bMy3atgwe6NToMjvTg47i0ZxEGwyn2SMPLHc0TykdOz1UhLseISodm2rUPPxzOGcxBC6QDg1MsT5cBpPKZ+RgeZ2oXc7rD4IjTxocPh4eHeeJkKB7RK17rBPqlzY+Ih7p1j6fRIXHA8kFyOJzUKPSqzCtmf35m/PnRxueAOOfxOdEe10KM4iRJVAZNUS5Op5ET8mz77dqDbt3jrjUcToLCIQ53CqpQAE1temV6VGr88dF3L58Tc3aa/I+HImr18FCmgztWEkGgKdPS/QVI9/xY/3F18B+eR4fIyescmQ5yaisrwFHt0uKZkd1aPzi4G5TjRoNs0syJZiVpP18ulGu10Vn0jAbiCbTr24/1c2wWcjYGScdxI0AaB7qFmmS5TOFgOtwu0kyFdnbgrB/cDc4RDyhHdUumQ+EkixDOCnr8fk29OFvs00Nhd3BR8e3+foDZoXAiQKjxRxmrVkZPlTzTK0GNHB8IZR/OVufMiXnc0dIJc5w8aCgdHB0CVX1NZDzcLlrqrF8OzJHxhEAOPrsvmpWhdFLAqa5U05onePCBdPb4XN4hTie1MXg6YZCTz9MZHZuVIVC5X6uCJi1AEfHsbTMHrtgv7u+7g3D8dMItc0zkZGQ6uWqtDxzQpAPT4+/se5zO+Tlz6u9MJ9wvwckk8ZZMZvrAUZ4Vf5r9gw9xqFfAmX13OgGR4GxkWAPxcDoCFN67Ztr4IAaM8vnl5eUFcFIb70wH3/sdY06aNbT1fY8aH9GuGbjWmUHO+jk92nNxfwEH0AE4PsUNHBMdn4OgXIbjaaUliOLRFmL4IFgHOO3LyyNIp556z3FHfXQFyHEM5mxkWAT5ULtaMp/g3o6PyW12zs7pwVToVRquQAbhBGbHPyyG0oEtl8nQMGdUv/TpoXDOzrv1yx0cnQtYlbx/dmQ++M6khwxUPBhQmqanFeFpt9t7+NRkvc2TXMeFycYgnNDsqOJ00pwPDA++S/P4tLSjj+zVXrdzdlao13egVxf3pBlSOrQZPDvYGwmCjrXU+Ih0eJjb7S5oHgv1dh3Due7iAntkoHSc6HQMmQ6AMqp4d28FD4XYKtB0ixQO7FfXaUpn/H1H5cDGzZrdSAuRMuETZ63aSoubpbLpfERNnQc5lxp4dv6Yzmw6vSEwfkb8TOdKGY6ExanCx3YPNL1iseCHQxdD72nWa+mkZ8WBTyWEMvFPCZaBgM/Y9uqjqEHODmh2OJzUyHs40enMClAmLQ448jMQLaOlV5gaBYzQQKsu7pNJvlZ8XzqBgHyOFhAlpE6jcFmxQk8K0DNenA22qphM8qMw70onVMzh5yQ0kK9ZEc9Q+Jo6aS5ySfKkUgPuWS8i8tMZlU/ZrKzQSpA3KokZLRb1wbnO0VqWQENPh5/PYlB6VkqU5YUG9qqcwIzETidqC3IK4slHIcKU2CI1RU2DrSqIcJLx96w/xiM4BfVs6Cw/64exBCyIKQCGsqmThmdnZPgcfB69qD0/qz0tKvrEGpFNL5dkD7RrZJjpGMzZ4X9lUAySijIYH0PZ9HIyHNLEnJ3o4REjJDg7AlQoRlVBaY4ufl3XT2U4I0nQDLNZIp2jHR8UIhUYs8MY0BRzUkPpxN6zDH1PCpfJnCMCaaRgMebo6Nc17OGyVaCBeOKng5jg7h1O59eRANVxqxd8VJ0ppIFoLnKsUc2Cip2O6pdPMgLp/CKPSEigdgri445IBqIpnpJGxwyQDouERX5CH2U6vwRIiQIlMJcUjWzViPQMko5vCjTO4HSuf3Gx6ChEYcxFJqDx0xmAE1mOSqfcvRaiI5GSX7/Qcn2ZVphQq8aHxcHidHZbrd6FFEnWryP+FIIp5HIvoxGt+hcc8LR2UaSbrjGW64t6JpdTe3cuiBkZH246hsccAmVaK4XeBaEIcrFTSKtY1B6lR4Ph/It0dlvoQRJcpufwWl30RxsX36JFMz6++C84PghCEhfrUTUSmOKhc6hZt3o8Le1iNAqjxoYxi8NP53Y3Ip8kBZQJYLQZVpp/kI70SIxoFz/+lJEOv01ybLC+Dz+d2yBIa1lStmzEb5Mezb/gNJATGqBWZiQDN3wXqnGKhi39799Phs9p+Plo89NCDdx/JqTRkoE6OR327Iz5HjXOI7wRJqMPjJYMZnMyTA4flenXTW9fTNBIaxxuLWRICFr0ZKB+D71ZlQeZj5bQOG+BkhSaGcacjMT5tY03NatyWlkKBNTf7Vdb/VZ1vAqg6jjcFn0KWjgYwIznksPnVAB0y57d2zJ7+q1+v9pfrC72Fxd9CPaIcxGY5DDTMSQHQbsiIPwVrb6sRdq+8+ZTTn4jBjVxOKve39IxG4KDohZE9OnrLf7OmNCQ4oQYEkKW3306z/Pi9M2/AD73Fw6kQ5wFCars3jY+feJfqDspn0QVWkZoPZYSq8E3/3p83jPMN81OpbImQKeV1i7+Ntvvr19/L58sKwRuWCf9pFgcEqa0GGd2/tosxdFFp5XMbhl/ce/370+//Trpt5KVXBCzGIvT/Es6JjUrV/HrlEFYlVwmA4toXrnSd+SyeURh8BT6Zs4c7ll/AJles4kc3UP3eypJAiYkMhiFgR3/ldd0eYVjGuIWnQ5yTnN4Z5XoykmIsKQIUxqXJ4rvMV605LBpKI++Mc/EZnnHz1+SGbrXSi4MoS/mKv6lzUgwGagSnPMi7jn6BW+anqHlIzMSPJodfDWgZC4Dm4wh/FFe8KXE8kKzQH155fWAIjlyeCTAD0cERcPzBT34FlHiwRy11AliMJwYLweE8fgAmYlqFnIwni8jSX6mmFzJXDJwBayWXaXFoIU0x5Evv/MK57AR0BiBdPCXM8GDLxVUwZVWMqmeT08Gl1zqfP5dr8XTuC8lBe3yTFkGvxn6F6Bb/EJbz18i6hQ2fBeqHG5fnuO/0BbuXQjSdyxT+4w8A78M2XHslyH7gKeKJpbnQWPwPX4Un3j0rQZ8fQlfpI1efG3Nf/fH12kb7EXaKCF6CbvXC2Yqn3/bC9eJl6/Lrs7N/ekV7D78D2zUmILrtyuKAAAAAElFTkSuQmCC",
  //   price:59999,
  //   qty:1
  // }
  let decHandler = () =>{
    dispatch(decAction());
  }
  let incHandler = () =>{
      dispatch(incAction());
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <pre>{JSON.stringify(product)}</pre>
        <div className="col-md-6">
          <table className='table table-hover'>
            <thead className='bg-dark text-white'>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td><img src={product.image}></img></td>
                <td>{product.price}</td>
                <td><i className='fa fa-minus-circle' onClick={decHandler}></i>&nbsp;{product.qty}&nbsp;<i className='fa fa-plus-circle' onClick={incHandler}></i></td>
                <td>{product.qty * product.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product