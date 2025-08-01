import { CLOUDCONNECTION } from "../../../Connection/CloudConnection.js";

export const QELPAGEFOUR=(HOLDERS)=>{

   // CLOUDCONNECTION();

    const IMAGED="data:image/webp;base64,UklGRtAQAABXRUJQVlA4TMMQAAAv/8A/EPfHIJKkRk2UgAL8S+RzfgEK2raRvBfCEBx/iCcFbdtI3gthCI4/xBPDSJISFTKHkwP55/X1CTimtm0bxnbaqJwBBdXfo+5uSKoiRIArRIAEQgQA4AgRAAAABBwdIjb60SFiw0Ld6TBQv74gJ/AA9uQR43+z0H/aY2bbIABO9BDRUUGIuENExxMzbZnpGO1uwxq2bYucZrO7JMGKO9Rb3K3u7krdXT/c3TUQ370TKA71AnVvcWiLu1saWyh8wUn2/pGZdyb7vDPzN6L/E0DfHWp566odY1MzD+/s1ob+O6nL6ylQ7X3cZ81bkQ67U+b5qEDjfnByb4lfCjQeDodv8EmddsPxD31RzfUox4M+KOnRTJRnof+5ej/sRgb90fVE4tGIWZ7fKXkyDJs776jBslfBfK/PmTcc6plrFtDyOYu3/c2XhVDOerEGrUuSLe70MyUvQjmy6gxVl8Cyqo+pMRDKg+tSOTTeYjj9a53DUE25OUD1O2B5p3+5Ig2qG4/S5kd5FmkzfMvNUSimLTZo91VYdqNffQSqu4/TdmdYFlTyKcYfUF2TRNuVcq0eoj81noVi1u20H+gJy4kV/EngRSimXEUHH4V1I/rTYM1W175RYDKhNh38AtZ/0c+eWwVgz1E6uCDD6shZX0PeGNmSQAerTIZluD397hVBOnjsEKx/pR8/egDWPUr9WKUxsB47gz78vwOwnnqCfjKUcGZui48bNVm0+NJPKpdH3VxYF15Nr24kHP2vWf2Gny+668dfn3/tnU079oydmgX1iavbGg51Sod1USN64gvFx5rVa9D1xq+///WZl9/atG3I/uQCxOfITo4sjsI6eik9a7DNlw++8NaGLYPGTMqD6P8V2zr/ChTDF9ObGidu+TsV2pzQwkbNIVCMXk9Pmvj9eOg1taXSJSlQzGhEL5p9Tzq0+28tq7ProJrfjl501jDoeGe2iXFJMlQnXEQvOn8y9PxTmeb9oLyrEr3oglRoOvUkZ66MQnlVDr1o8xRoe+lTGVAuXERPeiIZWsx4s0nLWXUXvR9Ws7u/OT1pzUnQ4juVaT63j2ORF0/Rk84cBy0+ZNA6e4VD49vTmxaPghaXU7n6VCfCy0/Rm57cDS0eCKpUuzsXDvZpRo96aiD0uIiWrZYOisLBA13pVZP6Qo/Rc2US69zaF44evK2EXjW4EZocxrLJcHb/VyF61ux10GWPMqfg7PhSetfYWmizV5mK/zqzj97VWAl9jinDZoMcGelhnoZOK5chW//e+8DU5P3bXn5bYbh3eRRa/dFMUWW3Z/kBes1LtDGvSGGoV7kVuu0dUkoaCcWdHuWGiHbwzgWFs/2hOtibfB6Fhvd+aha4ZAKUB3qST7Og59FP33LZbcsnwuYAL1K/EG7az4PUTYWrbvUe/58Kd+3tOebmwmU3e42ak+C2PT3G0bFw3U3eInEv3Le7p5ixBy78oZeYPhBuvN5D5PSBK7/vHUIfwp3XeYbs9+HS73iF2Fq49d8ewXgZEodkauEvj/AMJH7LKrt08KY3+A0SHyFZoYcG1nqCByDxOZZNGiLvdS9wBySuCZjwE3mrPcCiiIQPsmn+oLxX3K9LFAL7JdH8+oi8la7XuQgChyTQ/PIo5L/odu0yIHDUWZp/nAENPu9yC9Ig8FANmjdNhQ6XuVuLfAicMpvmc6ZCi8+62pxcCMxrTvOah6HHpW5W5TAEFtSjeaWx0OTTLnbmEARmfULzGSOg3GO9oG7uVWk/BIY/p/mpgVBeG+CnqWJ+d63EEZB4M83Pb4by+mySLfOlPOFWCbsg8R9aBt9W6pPDsp2k/OZSF/pD5J1WjL2isHM6TY1pQh5zp/ObIbO7YUXjaYt9iTS/F0IfcaXQBkh9TIF82OTgTJovikj52Y1ib0DuswEF3hoBkmvRvFEUUh90IWMFJL9WqsDrivKa0bxdBsT+5D7GMsh+O6jAxvVo3jodch9wnychvXuSgvW8FNiMxNUPrvMg5G+taOv4ZNj8I3Rdfhzd6zbfQmb6lhd6K2BXoo2j42FzhUHOnRQ/d7vMLRER+5ZUIHltuhX2HlWqthc2/4qR5ImUuPnWXa4LQ2DqbQGaNp1mhXFVVCrvt9E9RNNv4+ZOV/ksCoE9a9B6fpoVjtRWYPU9Sv2SaP593HzjJh0yIXBpKVXvUsDUpgo8uUNhaALNL4/Gze0u0rYAAh+n+iUqSK2vwAubLUYX0/zjDMTtre7RNBUCVxkKJY2eHhpRQkYnBZ5/32TCGZq3TEX83uIa/58GgQNCtJz5azLsFzVRYPZaALlVaT73X8TxTW5RawoEptakeeCuAjgaXqzAwPPIb0HzYxMRz1+5xKyJkPgdzUtfhePfK9B49CqaV9+PuP7CHU6PhcQDQYvVKMdfDSvFc7sR34tc4exeiPya5otQrssCtioMQJw/6gbnhkJkwSmzhLTywevZNoKbEO/PucCp7ZD5Ls3vRHm/V6IUewdx/7z+cnpD6GKLPuWGXhcUjJcR/49pL/g/SG1hMaX8sP2cVTcIXKK70nchtpqZEY0DDPvI7AFIrKu5wOsQGw6YcUo8YHTlMrdCYlpQb8YLkBsxLHbEBQ7VIW8Oi3ideu8GyUkWD5fH7lQrZHXfAZlX6e1niK5qMa8cxsZqbLcS249avweyP7Pgh86tInM+EBZtqbVbIfxPq2YRx5aQDHWX9Th1fklE2mjDgk84doIkz6VI6l6qs8uiEN/UKrTDocE0XS9o8HRq/IosyF9lxRoHnbndbJucPTOo8fqFkJg21EZWZSseP+LE5OkmoRQxoz+ixhekQeLW07xXDa8rcM4EB76gaUdIHV+DGm+eAokbc0jeElaKLFRg9YG2ltH8VSmHq1DjJ5IhccB5lr20SAX7TykwZ5WNt7LNjmUKyZ1LjdecBImTimn+aaEK1qqQV+5XiPwRoPlrkJlShxqfOQ4ir6V1/VQV3K/E8zfsNNvalJbzwjLSWlPjxaMgs4oCm05ViVynRLJm4/vvuf40rYO7ILLwY2r85G4I7Z+gwNqHFRC91IbtpRCZ9Sk1Pn0gxA4tVmCVcQqIflUeSyAy+jk1ntQXgkfVUODRvQrAz4Zj10VFRL6kxks2QfTB/xSYuFMF7yU4tDgMkbdR49nrIHzyPAVW3KqCse2cCD4Dmd9T47G1ED+tlQKTuqsgsuqorWbDIPMRatxYCQ2mtVdg8G0VoPCZqkonVoch82nq/E9oMeMzBcZeUQKw/b5600kmzf+2D6SuMHT2KDQZvUSBxtM2yqYn50Hwmhg1fh+0GblTgbzHnux12dT41xAbnphiB/hRhXdFNLIxSI3fEBFy8JFmQTKp05qwGn43FHhjVBt9cqjxa6IQOeW2EC1r91PDizEFNs7SxI5T1HinLIj88CxVQ8vV8GZIgR0KtDDsJDXeLgMiHzZo83E1bDivwIV5GthXTI1fnQ6JkVtp21irht6nFFgnWdzYo9T4/DyIvJ0OVjykhkEzFHhiorCJs6jxObkQeTcdvdkGhldS4LH9oqZUpcaPH4bIx+hsSZ4NHJilwOrDBU2bR40fHQuRy2hZ9fkJE1fUtuI6OzhcW4EJ/cWkX02NVx8DkWsDZsYDUQDIuNXqF1vIna/Ak1lCCq+ixqsNh8gN2TQ1lsPyZos77SG/jUItyMzsSI1X3AmRfXNoaiyHdVp1s58cQMEVFqWbZUS7UuMV+kHkruk0/w2qd5itcAJZ15gthcjw9dR4SU+I3JdI83uhvNxsnyMILyrzIERGFlPjoQ8gMrMqLZ9Ue9LkPzgc+Y7Z3SDzO2o89hZkDqTiA0qdTW57/ubrL3liY4Et4MORkPkQNR54BUKTcxR4e8RqbMjEskLXtwrtSP2dGjeehdg3Ygq8JGoWaUjb02/YEpG33NDZYxD8T1CBn2WYPEJHT389RNirAWr8AYjekKPAtvkAXg04Q7LFM/mC3i6lxu+A8D7TFdjiX6wrZTmeeqBIyochanxRRBoGzVDgvDdLWL7dhWw5T403CUP+iEoKime+ffaxJsX2jqfLGHCBGr+8CDo8MMuW8VAWAIT7fHNW7cIuiBySQI03yIQeJ821YSyDddbbHWJW2d0hcmQiNb4gDbqcWlftN6hP/PWYSWwNRI6vQY23zIfUou1vvbBuuBLy26iEetgAwt0vC7HC3xA54Qw1ftFUCO1z2QWWPfPANAUUXKHA4D92ACS/cQAiJ8+mxmdPhsyRV1FxxgoFZF2jwNJX7UmdehE1PnMcZL56nupNCqwQuV2BRjc9pLWmxquNhsjMW2i7Y5EVIt8pkI/ooGAhNR7rDZEZHengxREr4BcV3h0Rl9mAOr8HIgs/oaM/q2CpocCbwsKKGlHn1VNFFH1KZ0t3qmBVqQKvzRIVbkKtPwmJ4S9oWdr845oqvEoJ7wQV2LBQUOQmar1kmojbaB5YMgnAoCsUOEgJG5MU2DZfzp3U+6eQ+CPNs1+HaeQ3w+obNfSrqMAW+VJ+pOafltCN5sH3YN3Nao4NDDmrwPVCHqfu+wp42TCLvQnVzyxCRTawb6bVmXQZzxra2xd/75bS1FgJ5f0xM+bawfjjZiVbIfKVALWfG3fjL9C8eLwa2jiGIxeVCayByL9i1H9m3D1L65n71O4wC4XtYWpdMrYaIj8I0QXHx907Cjy7y4l5cDLt0/96QGTP83TDrXEXbafAiltVrjL73hGx/SrQFVfHHfLbKjBpo9XYkNkIjeysSHe8Mf5Q2FCBwXcsLqPpfOhzeDW65Nmi+EP0egWWrjL5k+Yf6mNMdbrmOgEI36RA4w8A/5SadYE2D1amezaVgMjdCuQ96FlC01PjtXHkON30DQnAryr8ogJNA+9Dl9Pm0VWLj4jAswEF61+hy7z5dNmFmSLwaqmt66DL9Kvpup8VicA/QRsNi3SR0Z4u3DBDBDZfUGpbCE1Gu9KVPykQgR0nVZolayJ8LV16YaoIDK+uwFoTtBBZRNdunScCB44psPJoHXxLF2+WKwKTTiiweJi8H+jq85JFYPL/FZgwQNofdPlaE0VgWisFVughayld//ghEUi/UoHBdyW9EnA/1hgjApldFBh6U87fpfSCM0eJQPR6BcZekrIum97woxEiELlNgQlCNpXQKyYOEQHcr3CdjL5J9I7nBsrAk4bZmWQRA6fTS07fKgMvxMokDIfE3SfpLXM2ycAb2WTF7ZA4+iN6zfMfysAHFeaNhMRxM+k9g+tkoAAiJ9WkF429KkNm8gl609jLbpFXh17VWOoO6fXoXY1ubpDZgJ72Yf1lNaTHvUd30c/peb/TW+QreuCbwzq7k574q7C+7qVHvqZIVw/TM3fN0tOf9NAdC3X0suGl2KBAP3/F6K3r5evmn1J67fn/6mVTCb1381ydbEuiF686SR87K9Kbz56gi2En6dXPHNDDqGJ695mjdTC+Br188R55E47R2ycOlTalKr1+wnZZKc3o/Sv2k5Temn4wqaecgrb0hzkbpWR1pF8Mvisj2pj+MfS3hMgN9JOxVfEXuYX+MrYy7u6m3zSejrOf6D+N3+PqKfrSB+NopeFPeE/crA7Qry6JxMc7pfSvN4XjYWOQfvbSovLbmkR/2zirvAZcoN9tmFE+Q8/R/35SUB77iumHF6Y6N34m/XHrPKcmnKFfbprrzIGa9M/HRzixtTr9dM5TRXYK7sumz671cqFKytOn6cNzrnhu65j0jCPblnYuoacGAA==";

    const style = document.createElement('style');

    style.textContent = `
    
        .Updates{
            font-size:30px;
            text-align:center;
            margin-top:10%;
            color:Orange;
            font-weight:bold;
        }

        .ProductImage{
            background:white;
            width:50%;
            height:30%;
            border-radius:100%;
            padding:3%;
            margin-left:20%;
            margin-top:25%;
            
        }

        .Message{
            text-align:center;
            font-size:16px;
            margin-top:1%;
            color:#cdcdcd;
        }
        
        .Messager{
            text-align:center;
            font-size:14px;
            margin-top:1%;
            color:#cdcdcd;
        }
    
    `;

    document.head.appendChild(style);

    HOLDERS.innerHTML=`

        <img  class="ProductImage" src="${IMAGED}"/>

        <h1 class="Updates">Market Prices<h1>

        <h4 class="Message">Whole and Retail</h4>

        <p class="Messager">Buy at Fair Price</p>
    
    `;
};