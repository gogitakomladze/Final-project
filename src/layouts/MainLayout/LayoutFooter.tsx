import { TFooter, TtowFooter,} from "./Footer.styled"
import { Input , Button} from "antd"
// import { TContentspacer } from "@src/assets/contentsp.styled"
export function Footer() {
    return (
        <> 
        
     <TFooter>
            <div>
          <h1>ჩვენ შესახებ</h1>
            <ul>
                <li>მანიფესტი</li>
                <li>ბიზნესი</li>
                <li>მიწოდება</li>
                <li>ბლოგი</li>
                <li>ჩამოტვირთე აპლიკაცია</li>
                <li>მიმდინარე შეთავაზებები</li>
                <li>FAQ</li>
   
            </ul>
            </div>

            <div>
            <h1>წესები & პირობები</h1>
            <ul>
                <li>წესები & პირობები</li>
                <li>კონფიდენციალურობა</li>
                <li>დაბრუნება & გადაცვლა</li>
                <li>განვადება</li>
            </ul>
            </div>

            <div>
            <h1>რატომ ველი?</h1>
            <ul>
                <li>უფასო მიწოდება ყველგან</li>
                <li>თბილისში მიტანა 3 საათში</li>
                <li>მიტანის დროის არჩევანი</li>
                <li>უფასო სასაჩუქრე შეფუთვა</li>
                <li>0% ეფექტური განვადება</li>
        
            </ul>
            
          </div>
          <div>
            <h1>კონტაქტი</h1>
            
            <nav>
            <p>032 2 56 05 05</p>
            <p className="pl-5">support@veli.store</p>
            </nav>
            <nav>
            <img src="" /><img src="" /><img src="" /><img src=""  />
            </nav>
            <nav className="mt-10">
           <Input className="w-270 " type="gmail" placeholder="Enter Your Gmail"/>
           <Button type='dashed'>Submit</Button>
           </nav>
           </div>
       </TFooter>
        <TtowFooter>
        <section>

        <div>
            <nav>
          <h1>სამზარეულოს ტექნიკა</h1>
          <ul>
            <li>წვენსაწურები</li>
            <li>ბლენდერები</li>
            <li>მიქსერები</li>
            <li>ღუმელები & გრილები</li>
          </ul>
           </nav>
           <nav>
          <h1>პოპულარული ბრენდები</h1>
          <ul>
            <li>დაისონი</li>
            <li>ეფლი</li>
            <li>Kikkerland</li>
            <li>Pylones</li>
          </ul>
          </nav>
          <nav>
          <h1>აუდიო ტექნიკა</h1>
          <ul>
            <li>ყურსასმენები</li>
            <li>უსადენო ყურსასმენები</li>
            <li>დინამიკები</li>
            <li>ფირსაკრავები</li>
          </ul>
          </nav>

          <nav>
          <h1>ტექნიკა</h1>
          <ul>
            <li>ტელევიზორები</li>
            <li>მტვერსასრუტები</li>
            <li>ლეპტოპები</li>
            <li>მობილური ტელეფონები</li>
          </ul>
          </nav>
        </div>

        <div className="mt-10">
        <nav>
        <h1>სილამაზე & მოვლა</h1>
          <ul>
            <li>კორეული კოსმეტიკა</li>
            <li>სუნამოები</li>
            <li>სასაჩუქრე ნაკრებები</li>
            <li>თმის მოვლა</li>
            <li>წვერის მოვლა</li>
          </ul>
          </nav>
          <nav>
          <h1>პოპულარული კატეგორიები</h1>
          <ul>
            <li>მანქანის ჯაჭვები</li>
            <li>სამგზავრო ჩემოდანი</li>
            <li>საბურავები</li>
          </ul>
          </nav>
        </div>

        <div>
        
        </div> 
        </section>
        </TtowFooter>
        </>
    )
}