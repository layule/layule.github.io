import React from "react";
import "/src/styles/covernat/reset.scss";
import "/src/styles/covernat/style.scss";
import "/src/styles/covernat/font.scss";
import { logo } from "../images/covernat";
import { CovernatNav } from "../components/covernat/CovernatNav";
import { CovernatFooter } from "../components/covernat/CovernatFooter";

export default function CovernetMen() {
  return (
    <div className="page-container covernat">
      <CovernatNav></CovernatNav>
      <div class="hidden pt-2">
        <div class="grid place-items-center ">남성, 전체</div>
        <div class="border-b border-t py-2 mt-2 no-scrollbar overflow-x-auto">
          <div class="inline-block">
            <ul class="flex space-x-2">
              <button class="bg-brand-1 text-white  px-3 py-2 rounded-md w-max text-14">전체</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">특집</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">자켓</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">스웨트</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">니트</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">셔츠</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">티셔츠</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">바지</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">반바지</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">언더웨어</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">모자</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">가방</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">신발</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">악세사리</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">가젯</button>
              <button class="bg-brand-2  px-3 py-2 rounded-md w-max text-14">콜라보레이션</button>
              <div class="py-2">
                <button class="wh-6 rounded-full bg-brand-2 grid place-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333D4B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current wh-4"
                  >
                    <path d="M5 12H19"></path>
                    <path d="M12 5L19 12L12 19"></path>
                  </svg>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="reativ item">
          <div className="relative space">
            <div className="relative aspect">
              <img src={logo} alt="covernatlogo" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap">
              <div className="outlined-brand-1">신상품</div>
            </div>
            <div className="text-12">
              <p className="font-bold leading-tight">
                LUMEN FOLDING COUCH
                <br />
                LUMEN PRINT BLACK
              </p>
              <p className="font-bold">₩253.000</p>
            </div>
          </div>
        </div>
      </div>
      <CovernatFooter></CovernatFooter>
    </div>
  );
}
