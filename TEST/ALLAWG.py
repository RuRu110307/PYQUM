from ctypes import c_int, c_bool, c_char_p, byref, cdll, c_long, c_char
from ctypes.util import find_library
import ivi

# dloc = "C:\\Program Files\\IVI Foundation\\IVI\Bin\\AgM933x_64.dll" #64-bit
lib_name = find_library('AgM933x_64.dll')
dll = cdll.LoadLibrary(lib_name) #Python is 64-bit
AWGrs = b'PXI22::14::0::INSTR'

# Initiate session
def init():
    session = c_int()
    AGMinit = dll.AgM933x_InitWithOptions
    AGMinit.restype = c_int
    option = 'Simulate=false, DriverSetup=DDS=false'
    option = bytes(option, 'utf-8')
    status = AGMinit(c_char_p(AWGrs), c_bool(True), c_bool(True), c_char_p(option), byref(session))
    print("\nInitWithOptions:")
    print('status: %s' %(status))
    print('session: %s' %(session.value))
    return session

a = 2
if a ==2:
    import visa

# Closing session
def clos(s):
    AGMclose = dll.AgM933x_close
    status = AGMclose(s) #session of AWG defaultly set to 2
    print("\nclose:")
    print('status: %s' %(status))
    return s


s = init()
clos(s)
print(s)
