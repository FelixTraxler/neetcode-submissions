from urllib.parse import unquote
from urllib.parse import quote

class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += quote(s) + "&"
        return res

    def decode(self, s: str) -> List[str]:
        if s == "": return list([])
        if s == "&": return list([""])
        res = s[0:-1].split("&")
        return list(map(lambda x: unquote(x), res))