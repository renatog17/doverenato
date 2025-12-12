import { FaDove, FaStar, FaReact, FaCrown, FaGift, FaJava, FaLanguage } from "react-icons/fa";
import { useState } from "react";

export default function DoveStarsBanner() {
  const [votes, setVotes] = useState(() => Math.floor(Math.random() * 500) + 100);
  const [dovePos, setDovePos] = useState({ top: 0, left: 0 });

  const handleVote = () => {
    setVotes(votes + 1);
  };

  const moveDove = () => {
    setDovePos({
      top: Math.random() * 120,
      left: Math.random() * 120,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6 text-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full border-4 border-blue-300">
        <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaStar className="text-yellow-500" /> Dove Stars Candidate <FaStar className="text-yellow-500" />
        </h1>

        <p className="mb-6 text-lg">
          Renato, o programador polyglot e dev Java cujo avatar é Sócrates curtindo o Natal.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div
              onMouseEnter={moveDove}
              className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300 relative overflow-hidden"
            >
              <FaDove
                className="text-6xl text-gray-500 absolute"
                style={{ top: dovePos.top, left: dovePos.left, transition: "0.2s" }}
              />
            </div>
            <span className="mt-2 font-semibold">Pomba Oficial</span>
          </div>

          <div className="flex flex-col items-center">
            <img src="socratesfilosofo.png" alt="Renato" className="w-40 h-40 rounded-full object-cover border-2 border-gray-300" />
            <span className="mt-2 font-semibold">Renato</span>
          </div>
        </div>

        <div className="text-left mb-6 bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><FaLanguage /> Linguagens</h2>
          <p>Estuda Russo, Inglês e Espanhol.</p>
          <h2 className="text-xl font-semibold mt-4 mb-2 flex items-center gap-2"><FaJava /> Programação</h2>
          <p>Programador Java e amante de tecnologia.</p>
        </div>

        <div className="flex items-center justify-center gap-4 text-4xl mb-6">
          <FaReact className="text-blue-500 animate-spin-slow" />
          <FaGift className="text-red-500" />
          <FaReact className="text-blue-500 animate-spin-slow" />
        </div>

        <p className="text-md mb-4 font-medium">
          Feliz Natal! Que a pomba da paz e Sócrates natalino iluminem sua votação.
        </p>

        <button onClick={handleVote} className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl shadow-lg hover:bg-blue-600 transition">
          Votar Agora
        </button>

        <p className="mt-4 text-lg font-semibold">Votos: {votes}</p>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}